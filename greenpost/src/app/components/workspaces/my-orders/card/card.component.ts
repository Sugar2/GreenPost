import {Component} from '@angular/core';
import { TransactionModel } from '../../../../models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'my-orders-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MyOrdersCardComponent {
    dataSource = new MatTableDataSource<TransactionModel>(data);
}

const data: TransactionModel[] = [
    { id: 1, from: 'from', to: 'to' }
]