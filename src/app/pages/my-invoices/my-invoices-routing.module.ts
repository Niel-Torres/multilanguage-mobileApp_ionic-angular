import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInvoicesPage } from './my-invoices.page';

const routes: Routes = [
  {
    path: '',
    component: MyInvoicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInvoicesPageRoutingModule {}
