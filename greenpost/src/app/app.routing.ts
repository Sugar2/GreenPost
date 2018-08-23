import { Routes } from '@angular/router';

import { MyOrdersMainComponent, StarterComponent, MyOrdersSectionComponent, MyOrdersCardComponent, MyProfileComponent, LogisticsOrdersMainComponent, LogisticsOrdersSectionComponent, LogisticsOrdersCardComponent, LogisticsTransactionsMainComponent, LogisticsTransactionsCardComponent, LogisticsTransactionsSectionComponent } from './components';

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
}, {
    path: 'logistics-orders',
    component: LogisticsOrdersMainComponent,
    children: [
     { path: '', pathMatch: 'full', redirectTo: 'section' },{
        path: 'section',
        component: LogisticsOrdersSectionComponent
    }, {
        path: 'card',
        component: LogisticsOrdersCardComponent
    }]
}, {
    path: 'logistics-transactions',
    component: LogisticsTransactionsMainComponent,
    children: [
     { path: '', pathMatch: 'full', redirectTo: 'section'},{
        path: 'section',
        component: LogisticsTransactionsSectionComponent
     }, {
        path: 'card',
        component: LogisticsTransactionsCardComponent
     }]
}
];

