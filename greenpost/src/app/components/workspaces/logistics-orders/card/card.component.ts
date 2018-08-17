import {Component} from '@angular/core';
import { TransactionModel } from '../../../../models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'logistics-orders-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class LogisticsOrdersCardComponent {
    dataSource = new MatTableDataSource<TransactionModel>(data);
}

const data: TransactionModel[] = [
    { id: 1, from: 'Mayakovskoho 18', to: 'Warehouse 1', status: 'done' },
    { id: 2, from: 'Warehouse 1', to: 'Warehouse 3', status: 'active' },
    { id: 3, from: 'Warehouse 3', to: 'Lavrukhina 7/1', status: 'waiting' }
]