import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
* @title Table with expandable rows
*/
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['order.component.css'],
  templateUrl: 'order.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["ID","FROM","TO","RECEIVER","STATUS"];
  expandedElement: PeriodicElement;
}

export interface PeriodicElement {
  ID: number;
  RECEIVER: string;
  FROM: string;
  TO: string;
  STATUS: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    ID: 1,
    FROM: 'ул.Маяковского 12',
    TO: 'ул.Бассейная 40',
    RECEIVER: 'Анатолий Трубин',
    STATUS: 'В работе',
  }, {
    ID: 2,
    FROM: 'ул.Сабурова 17-а',
    TO: 'просп. Тараса Шевченка 5',
    RECEIVER: 'Владимир Деркач',
    STATUS: 'Забор',
  },{
    ID: 3,
    FROM: 'Склад №2',
    TO: 'Склад №4',
    RECEIVER: 'Марина Сиваченко',
    STATUS: 'В работе',
  },{
    ID: 4,
    FROM: 'ул.Васильковская 50',
    TO: 'ул.Электротехническая 1',
    RECEIVER: 'Андрей Порошенко',
    STATUS: 'Ожидает подтверждения',
  },{
    ID: 5,
    FROM: 'ул.Тихая 30',
    TO: 'просп.Степана Бандеры 20',
    RECEIVER: 'Виталий Сюткин',
    STATUS: 'В работе',
  }
];
