import {Component} from '@angular/core';
import { TransactionModel } from '../../../../models';
import {MatChipInputEvent, MatTableDataSource} from '@angular/material';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {PhoneMyOrdersCard} from "../../..";
export interface TypesOfDelivery {
    value: string;
    viewValue: string;
}
export interface PhoneMyOrdersCard {
    name: string;
}
@Component({
  selector: 'my-orders-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MyOrdersCardComponent {
    dataSource = new MatTableDataSource<TransactionModel>(data);
    typesOfDelivery: TypesOfDelivery[] = [
        {value: 'standart-0', viewValue: 'Стандарт'},
        {value: 'express-1', viewValue: 'Экспресс'}
    ];


    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    phones: PhoneMyOrdersCard[] = [
        {name: '+380990664449'},
    ];

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.phones.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(phone: PhoneMyOrdersCard): void {
        const index = this.phones.indexOf(phone);

        if (index >= 0) {
            this.phones.splice(index, 1);
        }
    }
}

const data: TransactionModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'сделан' },
    { id: 2, from: 'Склад 1', to: 'Склад 3', status: 'активен' },
    { id: 3, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'в ожидании' }
]
