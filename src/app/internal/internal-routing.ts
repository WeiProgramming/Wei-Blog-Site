import {Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from  './layouts/default-layout/default-layout.component';
import {AuthGuard} from '../shared/guards/auth/auth.guard';
import {ArticleListComponent} from './pages/article-list/article-list.component';
import {MakeArticleComponent} from './pages/make-article/make-article.component';

export const ROUTE: Routes = [
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'articles',
        component: ArticleListComponent,
      },
      {
        path: 'make-article',
        component: MakeArticleComponent,
      }
    ]
  }
];
