import {Component, OnInit} from '@angular/core';
import {CourierModel, OrderModel, TransactionModel} from '../../../../models';
import {MatChipInputEvent, MatTableDataSource} from '@angular/material';
import {PhoneMyOrdersCard, TypesOfDelivery} from "../../..";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {QueryService} from "../../../../services/query.service";
export interface TypesOfDeliveryCourier {
    value: string;
    viewValue: string;
}
@Component({
    selector: 'logistics-courier-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class LogisticsCourierCardComponent implements OnInit{
    courier: CourierModel;
    constructor(private query: QueryService) {

    }

    ngOnInit() {
        this.query.couriers.one(1).subscribe(c => {
            this.courier = c;
            this.dataSource = new MatTableDataSource<TransactionModel>(c.transactions);
        });

    }

    dataSource: MatTableDataSource<TransactionModel>;
    typesOfDelivery: TypesOfDeliveryCourier[] = [
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

/*
const data: TransactionModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'сделан', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null},
    { id: 2, from: 'Склад 1', to: 'Склад 3', status: 'активен', nextId: 2, next: null, orderId: 2, order: null, courierId: 1, courier: null, takeId: 2, take: null},
    { id: 3, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'в ожидании', nextId: 3, next: null, orderId: 3, order: null, courierId: 1, courier: null, takeId: 3, take: null}
]*/
