import {Component, Input, OnInit, AfterViewInit, AfterContentInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Article} from '../../../internal/models/Article';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit, AfterContentInit {
  @Input() initialLikes: number;
  @Output() updatedLikes: EventEmitter<any> = new EventEmitter<any>();
  // output updated likes
  hasLiked = true;

  constructor() {
  }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    if (!this.initialLikes) {
      this.initialLikes = 0;
      this.hasLiked = false;
      console.log('executed not liked');
    } else {
      this.hasLiked = true;
      console.log('executed liked');
    }
  }
  updateLikes() {
    this.initialLikes++;
    if (this.initialLikes  > 0) {
      this.hasLiked = true;
    }
    this.updatedLikes.emit(this.initialLikes);
  }
}
