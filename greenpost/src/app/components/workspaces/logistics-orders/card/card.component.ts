import {Component} from '@angular/core';
import { TransactionModel } from '../../../../models';
import {MatChipInputEvent, MatTableDataSource} from '@angular/material';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {PhoneLogTransCard} from "../../..";
export interface TypesOfDeliveryOrder {
    value: string;
    viewValue: string;
}
export interface PhoneLogTransCard {
    name: string;
}
@Component({
  selector: 'logistics-orders-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class LogisticsOrdersCardComponent {
    dataSource = new MatTableDataSource<TransactionModel>(data);

    typesOfDelivery: TypesOfDeliveryOrder[] = [
        {value: 'standart-0', viewValue: 'Стандарт'},
        {value: 'express-1', viewValue: 'Экспресс'}
    ];

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    phones: PhoneLogTransCard[] = [
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

    remove(phone: PhoneLogTransCard): void {
        const index = this.phones.indexOf(phone);

        if (index >= 0) {
            this.phones.splice(index, 1);
        }
    }
}

const data: TransactionModel[] = [
    { id: 1, nextId: 1, next: null, takeId: 1, take: null, courierId: 1, courier: null, orderId: 1, order: null, status: null, fromId: 1, from: null, toId: 1, to: null},
    { id: 2, nextId: 2, next: null, takeId: 2, take: null, courierId: 2, courier: null, orderId: 2, order: null, status: null, fromId: 2, from: null, toId: 2, to: null},
    { id: 3, nextId: 3, next: null, takeId: 3, take: null, courierId: 3, courier: null, orderId: 3, order: null, status: null, fromId: 3, from: null, toId: 3, to: null}
]