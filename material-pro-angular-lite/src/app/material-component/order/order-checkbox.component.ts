import {Component} from '@angular/core';

/**
* @title Configurable checkbox
*/
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css'],
})
export class OrderCheckboxComponent {
  checked = true;
  indeterminate = false;
  labelPosition = 'after';
  disabled = true;
}
