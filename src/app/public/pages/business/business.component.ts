import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {AngularFireAuth} from "@angular/fire/auth";


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  articles: any[];
  userId: string;
  articleText = 'business';

  constructor(private dbService: DatabaseService, private auth: AngularFireAuth) { }

  ngOnInit() {
        this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
  }

}
