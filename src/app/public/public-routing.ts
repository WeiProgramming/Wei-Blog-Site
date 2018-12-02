import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {IndexComponent} from './pages/index/index.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
];
