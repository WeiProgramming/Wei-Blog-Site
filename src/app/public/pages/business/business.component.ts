import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../shared/database/database.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {fadeIn} from '../../../shared/animations/fadein';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  animations: [fadeIn]
})
export class BusinessComponent implements OnInit {
  articles: any[];
  articleText = 'business';
  currentBasePath: string;

  constructor(private dbService: DatabaseService, private auth: AngularFireAuth, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
        this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
        this.currentBasePath = `articles/${this.activeRoute.snapshot.url[0].path}`;
        this.auth.authState.subscribe(user => console.log(user));
  }
  updateLikes(updatedLikes: number, articleKey: string) {
    const fullPath = `${this.currentBasePath}/${articleKey}`;
    this.dbService.editArticle(fullPath, {likes: updatedLikes});
    this.articles = this.dbService.getArticles(`articles/${this.articleText}`);

    console.log(this.articles);
  }
}
