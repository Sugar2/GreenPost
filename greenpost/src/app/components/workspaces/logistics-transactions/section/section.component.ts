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
    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }

    ngOnInit() {
        let rows = (<(TransactionModel | TakeModel)[]>data).concat(takes);
        rows.forEach((row: any) => {
            if (this.isTake(row)) {
                row.transactions = rows.filter((r: any) => r.takeId == row.id);
            } else {
                let takes = rows.filter((r: any) => r.id == row.takeId);
                row.take = takes && takes.length > 0 ? takes[0] : null;
            }
        });
        this.dataSource = new MatTableDataSource<TransactionModel | TakeModel>(rows.sort((a, b) => a.id - b.id));
    }

    getDataLength() {
        return this.dataSource.data.filter((r: any) => this.isTransaction(r)).length;
    }

    selection = new SelectionModel<TransactionModel | TakeModel>(true, []);
    
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    isTakeSomeSelected(row: TakeModel) {
        return this.selection.selected.filter((r: any) => r.take && r.take.id == row.id).length > 0;
    }

    isTakeSelected(row: TakeModel) {
        const numSelected = this.selection.selected.filter((r: any) => r.take && r.take.id == row.id).length;
        const numRows = this.dataSource.data.filter((r: any) => r.take && r.take.id == row.id).length;
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
            this.dataSource.data.filter((r: any) => r.take && r.take.id == row.id).forEach(row => this.selection.deselect(row)) :
            this.dataSource.data.filter((r: any) => r.take && r.take.id == row.id).forEach(row => this.selection.select(row));
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
    { id: 2, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: { id: 1, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null },
    { id: 3, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 2, order: null, courierId: 2, courier: { id: 2, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null},
    { id: 4, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 3, order: null, courierId: 3, courier: { id: 3, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null},
    { id: 5, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 4, order: null, courierId: null, courier: null, takeId: 1, take: null},
    { id: 7, from: 'Склад 1', to: 'Склад 3', status: 'В работе', nextId: 1, next: null, orderId: 5, order: null, courierId: null, courier: null, takeId: 6, take: null},
    { id: 8, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'В очереди', nextId: 1, next: null, orderId: 6, order: null, courierId: null, courier: null, takeId: null, take: null}
]
