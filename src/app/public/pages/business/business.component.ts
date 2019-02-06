import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  articles: any[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.articles = this.dbService.getArticles('/articles');
  }

}
