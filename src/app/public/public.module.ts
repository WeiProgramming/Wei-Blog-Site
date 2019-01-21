import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './public-routing';
import { PersonalComponent } from './pages/personal/personal.component';
import { BusinessComponent } from './pages/business/business.component';
import { RandomComponent } from './pages/random/random.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [IndexComponent, DefaultLayoutComponent, PersonalComponent, BusinessComponent, RandomComponent]
})
export class PublicModule { }
