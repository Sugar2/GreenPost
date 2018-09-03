import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent, AppHeaderComponent, AppSidebarComponent, MyOrdersCardComponent, MyOrdersMainComponent, MyOrdersSectionComponent, MyStarterComponent, MyProfileComponent, MapComponent, FileLoadComponent, LogisticsOrdersCardComponent, LogisticsOrdersMainComponent, LogisticsOrdersSectionComponent, LogisticsTransactionsSectionComponent, LogisticsTransactionsMainComponent, LogisticsTransactionsCardComponent, LogisticsCourierSectionComponent, LogisticsCourierMainComponent, LogisticsCourierCardComponent, MyUsersSectionComponent, MyUsersCreateModalComponent, MyUsersMainComponent, LogisticsStarterComponent } from './components';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        MyOrdersCardComponent,
        MyOrdersMainComponent,
        MyOrdersSectionComponent,
        MyUsersMainComponent,
        MyUsersCreateModalComponent,
        MyUsersSectionComponent,
        LogisticsOrdersCardComponent,
        LogisticsOrdersMainComponent,
        LogisticsOrdersSectionComponent,
        LogisticsTransactionsSectionComponent,
        LogisticsTransactionsCardComponent,
        LogisticsTransactionsMainComponent,
        LogisticsCourierSectionComponent,
        LogisticsCourierCardComponent,
        LogisticsCourierMainComponent,
        MyStarterComponent,
        LogisticsStarterComponent,
        MyProfileComponent,
        MapComponent,
        FileLoadComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        FlexLayoutModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    entryComponents: [
        FileLoadComponent,
        MyUsersCreateModalComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
