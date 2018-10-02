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
    { id: 1, nextId: 1, next: null, takeId: 1, take: null, courierId: 1, courier: null, orderId: 1, order: null, status: null, fromId: 1, from: null, toId: 1, to: null},
    { id: 2, nextId: 2, next: null, takeId: 2, take: null, courierId: 2, courier: null, orderId: 2, order: null, status: null, fromId: 2, from: null, toId: 2, to: null},
    { id: 3, nextId: 3, next: null, takeId: 3, take: null, courierId: 3, courier: null, orderId: 3, order: null, status: null, fromId: 3, from: null, toId: 3, to: null},
    { id: 4, nextId: 4, next: null, takeId: 4, take: null, courierId: 4, courier: null, orderId: 4, order: null, status: null, fromId: 4, from: null, toId: 4, to: null},
    { id: 5, nextId: 5, next: null, takeId: 5, take: null, courierId: 5, courier: null, orderId: 5, order: null, status: null, fromId: 5, from: null, toId: 5, to: null}
]
