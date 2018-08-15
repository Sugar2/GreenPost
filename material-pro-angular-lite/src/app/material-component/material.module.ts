import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TestComponent } from './test/test.component';
import { OrderComponent } from './order/order.component';
import { OrderTabsComponent } from './order/order-tabs.component';
import { OrderBtnComponent } from './order/order.btn-component';
import { OrderCardsComponent } from './order/order-cards.component';
import { OrderCheckboxComponent } from './order/order-checkbox.component';
import { OrderChipComponent } from './order/order-chip.component';

import { MaterialRoutes } from './material.routing';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [

  ],
  entryComponents: [

  ],
  declarations: [

    TestComponent,
    OrderComponent,
    OrderTabsComponent,
    OrderBtnComponent,
    OrderCardsComponent,
    OrderCheckboxComponent,
    OrderChipComponent,
  ]
})

export class MaterialComponentsModule {}
