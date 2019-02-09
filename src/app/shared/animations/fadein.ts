import {animate, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({opacity: '0'}),
    animate('.6s 600ms ease-in-out', style({opacity: '1'}))
  ])
]);
