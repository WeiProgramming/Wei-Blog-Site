import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../shared/database/database.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Article} from '../../models/Article';

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

  constructor(private db: DatabaseService, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.selectedArticles = this.db.getArticles(`articles/business`);
    this.currentActiveTab = 'business';
  }

  // Remove data and upload
  completeRemoval(article: {$key: string; value: {}}) {
    this.removeArticle(article);
    this.deleteUpload(article);
  }
  // Remove Article item
  removeArticle(article) {
    this.db.removeArticle(`articles/${this.currentActiveTab}/${article['$key']}`);
    this.selectedArticles = this.db.getArticles(`articles/${this.currentActiveTab}`);
  }
  // remove upload imaged
  deleteUpload(article) {
    this.storage.ref(`${article.value.picUrl}`).delete();
  }

  onIndexChange(event) {
    this.selectedArticles = [];
    this.selectedArticles =  this.db.getArticles(`articles/${event.tab.textLabel.toLowerCase()}`);
    this.currentActiveTab = event.tab.textLabel.toLowerCase();
  }
}
