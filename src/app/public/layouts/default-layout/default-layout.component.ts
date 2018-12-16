import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  expand(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const items = document.querySelectorAll('.category-item');
    // @ts-ignore
    items.forEach( item => {
      item.style.flex = 1;
    });
    target.style.flex = 5;
  }
}
