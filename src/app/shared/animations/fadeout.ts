import {animate, query, style, transition, trigger} from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition('index => *', [
    style({opacity: '1'}),
    animate('600ms ease-in-out', style({opacity: '0'}))
  ])
]);
