import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTE} from './internal-routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MakeArticleComponent } from './pages/make-article/make-article.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTE),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent, DefaultLayoutComponent, MakeArticleComponent, ArticleListComponent]
})
export class InternalModule { }
