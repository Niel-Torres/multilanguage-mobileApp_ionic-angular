import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyInvoicesPageRoutingModule } from './my-invoices-routing.module';

import { MyInvoicesPage } from './my-invoices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyInvoicesPageRoutingModule
  ],
  declarations: [MyInvoicesPage]
})
export class MyInvoicesPageModule {}
