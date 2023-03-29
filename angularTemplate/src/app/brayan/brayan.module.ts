import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrayanRoutingModule } from './brayan-routing.module';
import { BrayanComponent } from './brayan.component';


@NgModule({
  declarations: [
    BrayanComponent
  ],
  imports: [
    CommonModule,
    BrayanRoutingModule
  ]
})
export class BrayanModule { }
