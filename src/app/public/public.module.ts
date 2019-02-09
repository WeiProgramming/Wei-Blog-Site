import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './public-routing';
import { PersonalComponent } from './pages/personal/personal.component';
import { BusinessComponent } from './pages/business/business.component';
import { RandomComponent } from './pages/random/random.component';
import {SharedModule} from '../shared/shared.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  exports: [
    RouterModule
  ], declarations: [IndexComponent, DefaultLayoutComponent, PersonalComponent, BusinessComponent, RandomComponent, SignupComponent, LoginComponent]
})
export class PublicModule { }
