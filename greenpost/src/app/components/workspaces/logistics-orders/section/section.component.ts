import {Component} from '@angular/core';
import { OrderModel } from '../../../../models';
import {MatTableDataSource, MatBottomSheet, MatChipInputEvent} from '@angular/material';
import { Router } from '@angular/router';
import { FileLoadComponent } from '../../../widgets/file-load/file-load.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {SelectionModel} from "@angular/cdk/collections";
export interface Phone {
    name: string;
}
@Component({
  selector: 'logistics-orders-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class LogisticsOrdersSectionComponent {
    constructor(private router: Router, private bottomSheet: MatBottomSheet) { }
    dataSource = new MatTableDataSource<OrderModel>(data);

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
    phones: Phone[] = [
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

    remove(phone: Phone): void {
        const index = this.phones.indexOf(phone);

        if (index >= 0) {
            this.phones.splice(index, 1);
        }
    }

}

const data: OrderModel[] = [
    { id: 1, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс', transactions: []},
    { id: 2, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс', transactions: []},
    { id: 3, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс', transactions: []},
    { id: 4, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс', transactions: []},
    { id: 5, from: 'Маяковского 18', to: 'Лаврухина 7/1', reciever: 'Игорь Иванов', status: 'Активен', price: 232, type: 'экспресс', transactions: []}
]

