import {Component} from '@angular/core';
import { OrderModel } from '../../../../models';
import { MatTableDataSource, MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';

@Component({
  selector: 'logistics-orders-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class LogisticsOrdersSectionComponent {
    constructor(private router: Router, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<OrderModel>(data);

    openCard(rowId: number): void {
        this.router.navigate(['my-orders', 'card'])
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FileLoadComponent);
    }
}

const data: OrderModel[] = [
    { id: 1, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 2, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 3, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 4, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' },
    { id: 5, from: 'Mayakovskoho 18', to: 'Lavrukhina 7/1', reciever: 'Igor Ivanov', status: 'Active' }
]