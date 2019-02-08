import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../shared/database/database.service';
import {fadeIn} from '../../../shared/animations/fadein';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  animations: [fadeIn]
})
export class RandomComponent implements OnInit {
  articles: any[];
  articleText = 'random';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
  }

}
