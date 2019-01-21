import {Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from  './layouts/default-layout/default-layout.component';

export const ROUTE: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
]
