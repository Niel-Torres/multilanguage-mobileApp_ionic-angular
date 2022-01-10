import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLinePage } from './my-line.page';

const routes: Routes = [
  {
    path: '',
    component: MyLinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLinePageRoutingModule {}
