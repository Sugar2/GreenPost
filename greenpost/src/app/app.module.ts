import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { AppRoutes } from './app.routing';
export class MatPaginatorIntlRus extends MatPaginatorIntl {
    itemsPerPageLabel = 'Записей на странице';
    nextPageLabel = 'Следующая страница';
    previousPageLabel = 'Предыдущая страница';

    getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return '0 из ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' из ' + length;
    };
}
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {
    AppComponent,    
    AppHeaderComponent,
    AppSidebarComponent,
    MyOrdersCardComponent,
    MyOrdersMainComponent,
    MyOrdersSectionComponent,
    MyStarterComponent,
    MyProfileComponent,
    MapComponent,
    FileLoadComponent,
    LogisticsOrdersCardComponent,
    LogisticsOrdersMainComponent,
    LogisticsOrdersSectionComponent,
    LogisticsTransactionsSectionComponent,
    LogisticsTransactionsMainComponent,
    LogisticsTransactionsCardComponent,
    LogisticsCourierSectionComponent,
    LogisticsCourierMainComponent,
    LogisticsCourierCardComponent,
    MyUsersSectionComponent,
    MyUsersCreateModalComponent,
    LogisticsTransactionsCreateModalComponent,
    MyUsersMainComponent,
    LogisticsStarterComponent,
    SatCalendar,
    SatCalendarBody,
    RangeCalendar,
    matRangeDatepicker,
    matRangeDatepickerContent,
    matRangeDatepickerInput,
    matRangeDatepickerToggle,
    matRangeDatepickerToggleIcon,
    SatMonthView,
    SatYearView,
    SatMultiYearView,
    SatCalendarHeader
} from './components';
import { QueryService } from './services';
import { MAT_FORMATS } from './const';
import { MatPaginatorIntl, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        MyOrdersCardComponent,
        MyOrdersMainComponent,
        MyOrdersSectionComponent,
        MyUsersMainComponent,
        LogisticsTransactionsCreateModalComponent,
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
        FileLoadComponent,
        SatCalendar,
        SatCalendarBody,
        RangeCalendar,
        matRangeDatepicker,
        matRangeDatepickerContent,
        matRangeDatepickerInput,
        matRangeDatepickerToggle,
        matRangeDatepickerToggleIcon,
        SatMonthView,
        SatYearView,
        SatMultiYearView,
        SatCalendarHeader
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
    },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRus },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_FORMATS },QueryService],
    entryComponents: [
        FileLoadComponent,
        MyUsersCreateModalComponent,
        LogisticsTransactionsCreateModalComponent,
        matRangeDatepickerContent,
        SatCalendarHeader
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
