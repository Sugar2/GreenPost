import {Component} from '@angular/core';
import {OrderModel, TakesModel, TransactionModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {SelectionModel} from '@angular/cdk/collections';
import { MyUsersCreateModalComponent } from "../../..";
import { LogisticsTransactionsCreateModalComponent } from "../create-modal/create-modal.component";

@Component({
    selector: 'logistics-transactions-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})

export class LogisticsTransactionsSectionComponent {
    constructor(private router: Router,public dialog: MatDialog, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<TransactionModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FileLoadComponent);
    }

    /*displayedColumns: string[] = ['select', 'from', 'to', 'reciever', 'status', 'price', 'type'];*/
    displayedColumns: string[] = ['select', 'from', 'to', 'status'];
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
         console.log(takes.filter(take => take.transactions.filter(tran => tran.id == row.id).length > 0)
            .map(take => take.transactions));

    }

}


const takes: TakesModel[] = [
    {id: 1, transactions:[{id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен' }, {id: 2, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен'}, {id: 3, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен'}]},
    {id: 2, transactions:[{id: 4, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен'}, {id: 5, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен'}, {id: 6, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен'}]}
]

const data: TransactionModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен' },
    { id: 2, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен' },
    { id: 3, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен' },
    { id: 4, from: 'Маяковского 18', to: 'Склад 1', status: 'Выполнен' },
    { id: 5, from: 'Склад 1', to: 'Склад 3', status: 'В работе' },
    { id: 6, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'В очереди' }
]
