import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
name: string;
color: ThemePalette;
}

/**
* @title Stacked chips
*/
@Component({
  selector: 'chips-stacked-example',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css'],
})
export class OrderChipComponent {
  availableColors: ChipColor[] = [
    {name: 'Warn', color: 'warn'}
  ];
}
