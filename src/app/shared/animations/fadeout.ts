import {animate, query, style, transition, trigger} from "@angular/animations";

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    style({opacity: '1'}),
    query(':leave' , animate('600ms ease-in-out', style({opacity: '0'})), { optional: true })
  ])
])
