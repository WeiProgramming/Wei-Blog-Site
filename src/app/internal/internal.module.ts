import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTE} from './internal-routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTE),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent, DefaultLayoutComponent]
})
export class InternalModule { }
