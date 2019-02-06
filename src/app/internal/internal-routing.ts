import {Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultLayoutComponent} from  './layouts/default-layout/default-layout.component';
import {AuthGuard} from "../shared/guards/auth/auth.guard";

export const ROUTE: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
]
