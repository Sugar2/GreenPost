import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@types/googlemaps';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'file-load',
  templateUrl: './file-load.component.html',
  styleUrls: ['./file-load.component.scss']
})

export class FileLoadComponent {
    constructor(private bottomSheetRef: MatBottomSheetRef<FileLoadComponent>) { }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}