import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
    //{state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5'},
    {state: 'test', type: 'link', name: 'Мой Профиль', icon: 'crop_7_5'},
    {state: 'order', type: 'link', name: 'Мои Заказы', icon: 'crop_7_5'},

];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
