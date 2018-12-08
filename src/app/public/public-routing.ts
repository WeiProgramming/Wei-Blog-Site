import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {IndexComponent} from './pages/index/index.component';
import {PersonalComponent} from './pages/personal/personal.component';
import {BusinessComponent} from './pages/business/business.component';
import {RandomComponent} from './pages/random/random.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'business',
        component: BusinessComponent
      },
      {
        path: 'random',
        component: RandomComponent
      }
    ]
  }
];
