import { Routes } from '@angular/router';

import {
    MyOrdersMainComponent,
    MyStarterComponent,
    MyOrdersSectionComponent,
    MyOrdersCardComponent,
    MyProfileComponent,
    LogisticsOrdersMainComponent,
    LogisticsOrdersSectionComponent,
    LogisticsOrdersCardComponent,
    LogisticsTransactionsMainComponent,
    LogisticsTransactionsCardComponent,
    LogisticsTransactionsSectionComponent,
    LogisticsCourierCardComponent,
    LogisticsCourierSectionComponent,
    LogisticsCourierMainComponent,
    MyUsersMainComponent,
    MyUsersSectionComponent,
    LogisticsStarterComponent
} from './components';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'my-starter',
    pathMatch: 'full'
}, {
    path: 'my-starter',
    component: MyStarterComponent
}, {
    path: 'logistics-starter',
    component: LogisticsStarterComponent
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
    path: 'my-users',
    component: MyUsersMainComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'section' },
        { path: 'section', component: MyUsersSectionComponent }
    ]
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
}, {
    path: 'logistics-couriers',
    component: LogisticsCourierMainComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'section'},{
            path: 'section',
            component: LogisticsCourierSectionComponent
        }, {
            path: 'card',
            component: LogisticsCourierCardComponent
        }]
}
];
