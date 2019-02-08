import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {fadeIn} from "../../../shared/animations/fadein";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [fadeIn]
})
export class PersonalComponent implements OnInit {
  articles: any[];
  articleText = 'personal';

  constructor(private dbService: DatabaseService, private afAuth: AngularFireAuth) {
    this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
  }

  ngOnInit() {}
}
