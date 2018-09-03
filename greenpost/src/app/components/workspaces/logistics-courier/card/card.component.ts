import {Component} from '@angular/core';
import { TransactionModel } from '../../../../models';
import { MatTableDataSource } from '@angular/material';
import {TypesOfDelivery} from "../../..";
export interface TypesOfDeliveryCourier {
    value: string;
    viewValue: string;
}
@Component({
  selector: 'logistics-courier-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class LogisticsCourierCardComponent {
    dataSource = new MatTableDataSource<TransactionModel>(data);
    typesOfDelivery: TypesOfDeliveryCourier[] = [
        {value: 'standart-0', viewValue: 'Стандарт'},
        {value: 'express-1', viewValue: 'Экспресс'}
    ];
}

const data: TransactionModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'сделан' },
    { id: 2, from: 'Склад 1', to: 'Склад 3', status: 'активен' },
    { id: 3, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'в ожидании' }
]
