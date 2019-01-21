import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  articles: any[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.articles = this.dbService.getArticles('/articles');
}
