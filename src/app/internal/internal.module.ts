import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTE} from './internal-routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
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
