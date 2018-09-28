import {Component, OnInit} from '@angular/core';
import {OrderModel, TakeModel, TransactionModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatDialog, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {SelectionModel} from '@angular/cdk/collections';
import { MyUsersCreateModalComponent } from "../../..";
import { LogisticsTransactionsCreateModalComponent } from "../create-modal/create-modal.component";
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'logistics-transactions-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    animations: [
        trigger('actions', [
            state('inactive', style({
                opacity: 0,
                transform: 'translateX(100%)'
            })),
            state('active', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', display: 'none', opacity: 0 })),
            state('expanded', style({ })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})

export class LogisticsTransactionsSectionComponent implements OnInit {
    constructor(private router: Router, public dialog: MatDialog, private snackBar: MatSnackBar) { }
    dataSource: MatTableDataSource<TransactionModel | TakeModel>;
    expandedElement: TransactionModel | TakeModel;
    _date: matRangeDatepickerRangeValue<Date>;
    get date(): matRangeDatepickerRangeValue<Date> {
        return this._date;
    };
    set date(value: matRangeDatepickerRangeValue<Date>) {
        this._date = value;
    };

    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }

    ngOnInit() {
        let rows = (<(TransactionModel | TakeModel)[]>takes).concat(data);
        rows.forEach((row: any) => {
            if (this.isTake(row)) {
                row.transactions = rows.filter((r: any) => !this.isTake(r) && r.takeId == row.id);
            } else {
                let take = rows.find((r: any) => this.isTake(r) && r.id == row.takeId);
                row.take = take;
            }
        });
        this.dataSource = new MatTableDataSource<TransactionModel | TakeModel>(rows.sort((a, b) => {
            let aCreatedOn = this.isTake(a)
                ? (<TakeModel>a).transactions.reduce((max: Date, t: TransactionModel) =>
                    max.getTime() > t.createdOn.getTime() ? max : t.createdOn, new Date(0)).getTime()
                : ((<TransactionModel>a).take ? (<TransactionModel>a).take.transactions.reduce((max: Date, t: TransactionModel) =>
                    max.getTime() > t.createdOn.getTime() ? max : t.createdOn, new Date(0)).getTime() : (<TransactionModel>a).createdOn.getTime());
            let bCreatedOn = this.isTake(b)
                ? (<TakeModel>b).transactions.reduce((max: Date, t: TransactionModel) =>
                    max.getTime() > t.createdOn.getTime() ? max : t.createdOn, new Date(0)).getTime()
                : ((<TransactionModel>b).take ? (<TransactionModel>b).take.transactions.reduce((max: Date, t: TransactionModel) =>
                    max.getTime() > t.createdOn.getTime() ? max : t.createdOn, new Date(0)).getTime() : (<TransactionModel>b).createdOn.getTime());
            if (this.isTake(a) && !this.isTake(b))
                if ((<TakeModel>a).id == (<TransactionModel>b).takeId)
                    return -1;
                else
                    if ((<TransactionModel>b).takeId)
                        return bCreatedOn - aCreatedOn;
                    else
                        return 1;
            if (this.isTake(b) && !this.isTake(a))
                if ((<TakeModel>b).id == (<TransactionModel>a).takeId)
                    return 1;
                else
                    if ((<TransactionModel>a).takeId)
                        return bCreatedOn - aCreatedOn;
                    else
                        return -1;
            if (this.isTake(a) && this.isTake(b))
                return bCreatedOn - aCreatedOn;
            if (!this.isTake(a) && !this.isTake(b))
                return bCreatedOn - aCreatedOn;
        }));
    }

    getDataLength() {
        return this.dataSource.data.filter((r: any) => !this.isTake(r)).length;
    }

    selection = new SelectionModel<TransactionModel | TakeModel>(true, []);
    
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.filter((r: any) => !this.isTake(r)).length;
        return numSelected === numRows;
    }

    isTakeSomeSelected(row: TakeModel) {
        return this.selection.selected.filter((r: any) => r.take && !this.isTake(r) && r.take.id == row.id).length > 0;
    }

    isTakeSelected(row: TakeModel) {
        const numSelected = this.selection.selected.filter((r: any) => r.take && !this.isTake(r) && r.take.id == row.id).length;
        const numRows = this.dataSource.data.filter((r: any) => r.take && !this.isTake(r) && r.take.id == row.id).length;
        return numSelected === numRows;
    }

    isTake(row: any): boolean {
        return row.transactions;
    }

    isTransaction(row: any): boolean {
        return !row.transactions;
    }

    takeToggle(row: TakeModel) {
        this.isTakeSelected(row) ?
            this.dataSource.data.filter((r: any) => r.take && !this.isTake(r) && r.take.id == row.id).forEach(row => this.selection.deselect(row)) :
            this.dataSource.data.filter((r: any) => r.take && !this.isTake(r) && r.take.id == row.id).forEach(row => this.selection.select(row));
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    openCreateDialog(): void {
        var dialogRef = this.dialog.open(LogisticsTransactionsCreateModalComponent, {
            width: '500px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.snackBar.open("Курьер успешно назначен");
        });
    }

    toggleTake(row: TransactionModel | TakeModel) {
        this.selection.toggle(row);
    }
}


const takes: TakeModel[] = [
    {id: 1, transactions:[]},
    {id: 6, transactions:[]}
]

const data: TransactionModel[] = [
    { id: 2, createdOn: new Date(2018, 9, 25), from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: { id: 1, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null},
    { id: 3, createdOn: new Date(2018, 9, 27), from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 2, order: null, courierId: 2, courier: { id: 2, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null},
    { id: 4, createdOn: new Date(2018, 9, 27), from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 3, order: null, courierId: 3, courier: { id: 3, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null},
    { id: 5, createdOn: new Date(2018, 9, 27), from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 4, order: null, courierId: null, courier: null, takeId: 1, take: null},
    { id: 7, createdOn: new Date(2018, 9, 26), from: 'Склад 1', to: 'Склад 3', status: 'В работе', nextId: 1, next: null, orderId: 5, order: null, courierId: null, courier: null, takeId: 6, take: null},
    { id: 8, createdOn: new Date(2018, 9, 28), from: 'Склад 3', to: 'Лаврухина 7/1', status: 'В очереди', nextId: 1, next: null, orderId: 6, order: null, courierId: null, courier: null, takeId: null, take: null },
    { id: 8, createdOn: new Date(2018, 9, 23), from: 'Склад 3', to: 'Лаврухина 7/1', status: 'В очереди', nextId: 1, next: null, orderId: 6, order: null, courierId: null, courier: null, takeId: null, take: null },
]
