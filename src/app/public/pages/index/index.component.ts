import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {fadeOut} from '../../../shared/animations/fadeout';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [fadeOut]
})
export class IndexComponent implements OnInit {
  // homeSubject = new BehaviorSubject<boolean>(false);
  // homeOpen = this.homeSubject.asObservable();
  constructor(private router: Router) { }
  ngOnInit() {
    const items = document.querySelector('.category-group');
  }

  expand(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const items = document.querySelectorAll('.category-item');
    // @ts-ignore
    items.forEach( item => {
      item.style.flex = 1;
      item.classList.remove('active');
    });
    target.style.flex = 8;
    target.classList.add('active');
    setTimeout(() => {
      this.router.navigate([`/${event.target.childNodes[0].innerText.toLowerCase()}`]);
    }, 600);
  }

}
