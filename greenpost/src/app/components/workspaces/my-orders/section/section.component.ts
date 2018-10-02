import {Component, OnInit} from '@angular/core';
import {OrderModel, TransactionModel} from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatChipInputEvent} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {QueryService} from "../../../../services";
export interface PhoneMyOrders {
    name: string;
}
@Component({
  selector: 'my-orders-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class MyOrdersSectionComponent implements OnInit {

    order: OrderModel;
    constructor(private query: QueryService, private router: Router, private bottomSheet: MatBottomSheet) { }

    ngOnInit() {
        this.query.orders.one(1).subscribe(order => {
            this.order = order;
            this.dataSource = new MatTableDataSource<TransactionModel>(order.transactions);
        });
    }
    dataSource: MatTableDataSource<TransactionModel>;

    openCard(rowId: number): void {
        this.router.navigate(['my-orders', 'card'])
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FileLoadComponent);
    }


    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    phones: PhoneMyOrders[] = [
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

    remove(phone: PhoneMyOrders): void {
        const index = this.phones.indexOf(phone);

        if (index >= 0) {
            this.phones.splice(index, 1);
        }
    }
}

/*
const data: OrderModel[] = [
    { id: 1, clientId: 1, client: null, status: null, transactions: [] },
    { id: 2, clientId: 2, client: null, status: null, transactions: [] },
    { id: 3, clientId: 3, client: null, status: null, transactions: [] },
    { id: 4, clientId: 4, client: null, status: null, transactions: [] },
    { id: 5, clientId: 5, client: null, status: null, transactions: [] }
]
*/

