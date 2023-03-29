import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrayanComponent } from './brayan.component';

const routes: Routes = [{ path: '', component: BrayanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrayanRoutingModule { }
