import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // homeSubject = new BehaviorSubject<boolean>(false);
  // personalSubject = new BehaviorSubject<boolean>(false);
  // businessSubject = new BehaviorSubject<boolean>(false);
  // randomSubject = new BehaviorSubject<boolean>(false);
  // homeOpen = this.homeSubject.asObservable();
  // personalOpen = this.personalSubject.asObservable();
  // businessOpen = this.businessSubject.asObservable();
  // randomOpen = this.randomSubject.asObservable();
  constructor(private router: Router) { }

  ngOnInit() {
    const items = document.querySelector('.category-group');
    // items.addEventListener('click', this.test);
  }
  // test(event) {
  //   const name = event.target.getAttribute('data-name');
  //   console.log(name);
  //   if (name === 'home') {
  //     this.homeSubject.next(true);
  //     this.personalSubject.next(false);
  //     this.businessSubject.next(false);
  //     this.randomSubject.next(false);
  //   } else if (name === 'personal') {
  //     this.homeSubject.next(false);
  //     this.personalSubject.next(true);
  //     this.businessSubject.next(false);
  //     this.randomSubject.next(false);
  //   } else if (name === 'business') {
  //     this.homeSubject.next(false);
  //     this.personalSubject.next(false);
  //     this.businessSubject.next(true);
  //     this.randomSubject.next(false);
  //   } else if (name === 'random') {
  //     this.homeSubject.next(false);
  //     this.personalSubject.next(false);
  //     this.businessSubject.next(false);
  //     this.randomSubject.next(true);
  //   }
  //   // console.log(`personal ${this.personalOpen}, home ${this.homeOpen}, business ${this.businessOpen}, random ${this.randomOpen}`);
  //   console.log(this.homeOpen.subscribe(res => console.log(res + 'hey there')));
  // }
  expand(event) {
    const target = event.target || event.srcElement || event.currentTarget;

    if(target.querySelector('h1').textContent.toLowerCase() !== 'home'){
      this.router.navigate([`/${target.querySelector('h1').textContent.toLowerCase()}`]);
    }
    else {
      this.router.navigate([`/`]);
    }
  }

}
