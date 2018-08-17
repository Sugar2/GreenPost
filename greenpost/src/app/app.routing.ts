import { Routes } from '@angular/router';

import { MyOrdersMainComponent, StarterComponent, MyOrdersSectionComponent, MyOrdersCardComponent, MyProfileComponent } from './components';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'starter',
    pathMatch: 'full'
}, {
    path: 'starter',
    component: StarterComponent
}, {
    path: 'my-profile',
    component: MyProfileComponent
}, {
    path: 'my-orders',
    component: MyOrdersMainComponent,
    children: [
     { path: '', pathMatch: 'full', redirectTo: 'section' },{
        path: 'section',
        component: MyOrdersSectionComponent
    }, {
        path: 'card',
        component: MyOrdersCardComponent
    }]
}];

