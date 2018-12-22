import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTE} from './internal-routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE)
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class InternalModule { }
