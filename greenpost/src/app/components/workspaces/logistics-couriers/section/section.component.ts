import {Component} from '@angular/core';
import {OrderModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatChipInputEvent} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {SelectionModel} from '@angular/cdk/collections';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Phone} from "../../..";
@Component({
    selector: 'logistics-courier-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})

export class LogisticsCourierSectionComponent {
    constructor(private router: Router, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<OrderModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['logistics-couriers', 'card'])
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

}

const data: OrderModel[] = [
    { id: 1, clientId: 1, client: null, status: null, transactions: [] },
    { id: 2, clientId: 2, client: null, status: null, transactions: [] },
    { id: 3, clientId: 3, client: null, status: null, transactions: [] },
    { id: 4, clientId: 4, client: null, status: null, transactions: [] },
    { id: 5, clientId: 5, client: null, status: null, transactions: [] }
]
