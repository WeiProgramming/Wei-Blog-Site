import {Component, Input, OnInit, AfterViewInit, AfterContentInit, OnChanges, SimpleChanges} from '@angular/core';
import {Article} from '../../../internal/models/Article';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit, AfterContentInit {
  @Input() article: Article;
  amountOfLikes: number;
  hasLiked = true;

  constructor() {
  }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    if (!this.article.likes) {
      this.amountOfLikes = 0;
      this.hasLiked = false;
      console.log('executed true');
    } else {
      this.hasLiked = true;
      console.log('executed false ');
    }
  }
  updateLikes() {
    this.amountOfLikes++;
    if(this.amountOfLikes  > 0){
      this.hasLiked = true;
    }
    return this.amountOfLikes
  }
}
