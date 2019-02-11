import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/Article';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatabaseService} from '../../../shared/database/database.service';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  // Variable that holds the data from db
  selectedArticles: any;

  // Current Opened tab
  currentActiveTab: string;

  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.selectedArticles = this.db.getArticles(`articles/business`);
    this.currentActiveTab = 'business';
  }

  // Remove Article item
  removeArticle(article) {
    this.db.removeArticle(`articles/${this.currentActiveTab}/${article['$key']}`);
    this.selectedArticles = this.db.getArticles(`articles/${this.currentActiveTab}`);
  }

  onIndexChange(event) {
    this.selectedArticles = [];
    this.selectedArticles =  this.db.getArticles(`articles/${event.tab.textLabel.toLowerCase()}`);
    this.currentActiveTab = event.tab.textLabel.toLowerCase();
  }
}
