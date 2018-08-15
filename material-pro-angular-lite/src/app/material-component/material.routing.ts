import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { OrderComponent } from './order/order.component';
import { OrderTabsComponent } from './order/order-tabs.component';
import { OrderBtnComponent } from './order/order.btn-component';
import { OrderCardsComponent } from './order/order-cards.component';
import { OrderCheckboxComponent } from './order/order-checkbox.component';
import { OrderChipComponent } from './order/order-chip.component';




export const MaterialRoutes: Routes = [

    {
      path: 'test',
      component: TestComponent
    },{
      path: 'order',
      component: OrderComponent
    },{
      path: 'order',
      component: OrderTabsComponent
    },{
      path: 'order',
      component: OrderBtnComponent
    },{
      path: 'order',
      component: OrderCardsComponent
    },{
      path: 'order',
      component: OrderCheckboxComponent
    },{
      path: 'order',
      component: OrderChipComponent
    },
];
