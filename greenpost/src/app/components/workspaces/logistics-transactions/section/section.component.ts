import {Component} from '@angular/core';
import {OrderModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {SelectionModel} from '@angular/cdk/collections';
import {LogisticsTransactionsCreateModalComponent, MyUsersCreateModalComponent} from "../../..";

@Component({
    selector: 'logistics-transactions-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})

export class LogisticsTransactionsSectionComponent {
    constructor(private router: Router,public dialog: MatDialog, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<OrderModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FileLoadComponent);
    }

    displayedColumns: string[] = ['select', 'from', 'to', 'reciever', 'status', 'price', 'type'];
    selection = new SelectionModel<OrderModel>(true, []);

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

}

const data: OrderModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс'},
    { id: 2, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс'},
    { id: 3, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс'},
    { id: 4, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс'},
    { id: 5, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс'}
]
