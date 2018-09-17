import {Component} from '@angular/core';
import {OrderModel, TakeModel, TransactionModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatDialog} from '@angular/material';
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
            transition('inactive => active', animate('120ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ]),

    ]
})

export class LogisticsTransactionsSectionComponent {
    constructor(private router: Router,public dialog: MatDialog) { }
    dataSource = new MatTableDataSource<TransactionModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }
    
    selection = new SelectionModel<TransactionModel>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }


    /** Selects all rows if they are not all selected; otherwise clear selection. */
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

        });
    }

    selectAllTake(row: TransactionModel) {
        this.selection.select(row);
         console.log(takes.filter(take => take.transactions.filter(tran => tran.id == row.id).length > 0)
            .map(take => take.transactions));

    }

}


const takes: TakeModel[] = [
    {id: 1, transactions:[{id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}, {id: 2, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}, {id: 3, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}]},
    {id: 2, transactions:[{id: 4, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}, {id: 5, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}, {id: 6, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null}]}
]

const data: TransactionModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: { id: 1, name: "Вася", status: "Active", transactions: [] }, takeId: 1, take: null },
    { id: 2, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 2, order: null, courierId: 2, courier: { id: 2, name: "Вася", status: "Active", transactions: [] }, takeId: 2, take: null},
    { id: 3, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 3, order: null, courierId: 3, courier: { id: 3, name: "Вася", status: "Active", transactions: [] }, takeId: 3, take: null},
    { id: 4, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен', nextId: 1, next: null, orderId: 4, order: null, courierId: null, courier: null, takeId: 4, take: null},
    { id: 5, from: 'Склад 1', to: 'Склад 3', status: 'В работе', nextId: 1, next: null, orderId: 5, order: null, courierId: null, courier: null, takeId: 5, take: null},
    { id: 6, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'В очереди', nextId: 1, next: null, orderId: 6, order: null, courierId: null, courier: null, takeId: 6, take: null}
]
