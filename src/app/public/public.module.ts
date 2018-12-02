import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './public-routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [IndexComponent, DefaultLayoutComponent]
})
export class PublicModule { }
