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
import { AppComponent, AppHeaderComponent, AppSidebarComponent, MyOrdersCardComponent, MyOrdersMainComponent, MyOrdersSectionComponent, StarterComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    MyOrdersCardComponent,
    MyOrdersMainComponent,
    MyOrdersSectionComponent,
    StarterComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
