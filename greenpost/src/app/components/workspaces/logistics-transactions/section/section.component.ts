import {Component} from '@angular/core';
import {OrderModel} from '../../../../models';
import { MatTableDataSource, MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'logistics-transactions-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class LogisticsTransactionsSectionComponent {
    constructor(private router: Router, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<OrderModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['logistics-transactions', 'card'])
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FileLoadComponent);
    }

    displayedColumns: string[] = ['select', 'id', 'from', 'to', 'reciever', 'status'];
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
    { id: 1, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 2, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 3, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 4, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 5, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' }
]
