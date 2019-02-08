import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  articles: any[];
  articleText = 'random';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
  }

}
