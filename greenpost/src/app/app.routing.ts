import { Routes } from '@angular/router';

import { MyOrdersMainComponent, StarterComponent, MyOrdersSectionComponent, MyOrdersCardComponent } from './components';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'starter',
    pathMatch: 'full'
}, {
    path: 'starter',
    component: StarterComponent
}, {
    path: 'my-orders',
    component: MyOrdersMainComponent,
    children: [{
        path: 'section',
        component: MyOrdersSectionComponent
    }, {
        path: 'card',
        component: MyOrdersCardComponent
    }]
}];

