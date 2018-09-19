import {Component, OnInit} from '@angular/core';
import {OrderModel, TransactionModel} from '../../../../models';
import {MatChipInputEvent, MatTableDataSource} from '@angular/material';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {PhoneMyOrdersCard} from "../../..";
import {MapMarkerModel} from "../../../../models/map.marker.model";
import {QueryService} from "../../../../services/query.service";
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

export class MyOrdersCardComponent implements OnInit{


    order: OrderModel;
    constructor(private query: QueryService) {

    }

    ngOnInit() {
      let order$ = this.query.orders.one(1);
      order$.subscribe(o => {
          debugger;//перевірити чи правцює, пофіксити
          this.order = o;
      }); //order$ - Observable, order - OrderModel, через асинхронність ф-ції робимо через callbackfunc
    }


    dataSource = new MatTableDataSource<TransactionModel>(data);
    typesOfDelivery: TypesOfDelivery[] = [
        {value: 'standart-0', viewValue: 'Стандарт'},
        {value: 'express-1', viewValue: 'Экспресс'}
    ];

    markers: MapMarkerModel[] = [
        { lng: 30.593034, lat: 50.429108 },
        { lng: 30.607346, lat: 50.523171 }
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
    { id: 1, from: 'Маяковского 18', to: 'Склад 1', status: 'сделан', nextId: 1, next: null, orderId: 1, order: null, courierId: 1, courier: null, takeId: 1, take: null},
    { id: 2, from: 'Склад 1', to: 'Склад 3', status: 'активен', nextId: 2, next: null, orderId: 2, order: null, courierId: 1, courier: null, takeId: 2, take: null},
    { id: 3, from: 'Склад 3', to: 'Лаврухина 7/1', status: 'в ожидании', nextId: 3, next: null, orderId: 3, order: null, courierId: 1, courier: null, takeId: 3, take: null}
]

let marker: MapMarkerModel[] = [
    {lat: 50.445158, lng: 30.518164},
    {lat: 50.411335, lng: 30.526813}
]