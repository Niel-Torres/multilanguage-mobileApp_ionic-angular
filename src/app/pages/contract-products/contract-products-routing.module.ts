import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractProductsPage } from './contract-products.page';

const routes: Routes = [
  {
    path: '',
    component: ContractProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractProductsPageRoutingModule {}
