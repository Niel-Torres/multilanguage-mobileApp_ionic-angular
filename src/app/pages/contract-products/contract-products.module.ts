import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractProductsPageRoutingModule } from './contract-products-routing.module';

import { ContractProductsPage } from './contract-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractProductsPageRoutingModule
  ],
  declarations: [ContractProductsPage]
})
export class ContractProductsPageModule {}
