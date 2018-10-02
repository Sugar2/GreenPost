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

export class MyOrdersCardComponent implements OnInit {
    order: OrderModel;
    constructor(private query: QueryService) { }

    ngOnInit() {
        this.query.orders.one(1).subscribe(order => {
            this.order = order;
            this.dataSource = new MatTableDataSource<TransactionModel>(order.transactions);
        });
    }

    dataSource: MatTableDataSource<TransactionModel>;
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

