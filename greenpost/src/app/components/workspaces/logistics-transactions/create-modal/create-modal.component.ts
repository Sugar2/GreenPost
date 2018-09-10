import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { UserRoleModel } from '../../../../models';

@Component({
    selector: 'logistics-transactions-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss']
})
export class LogisticsTransactionsCreateModalComponent {
    constructor(public dialogRef: MatDialogRef<LogisticsTransactionsCreateModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    allRoles: UserRoleModel[] = [{ id: '1', name: 'Ìåíåäæåð' }, { id: '2', name: 'Ðóêîâîäèòåëü' }];
    selected = "Василий Васькин"
}