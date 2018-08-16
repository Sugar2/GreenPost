import {Component} from '@angular/core';
import { OrderModel } from '../../../../models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'my-orders-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class MyOrdersSectionComponent {
    dataSource = new MatTableDataSource<OrderModel>(data);
}

const data: OrderModel[] = [
    { id: 1, from: 'from', to: 'to', reciever: 'reciever', status: 'status' }
]