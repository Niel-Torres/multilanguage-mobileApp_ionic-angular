import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLinePageRoutingModule } from './my-line-routing.module';

import { MyLinePage } from './my-line.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLinePageRoutingModule
  ],
  declarations: [MyLinePage]
})
export class MyLinePageModule {}
