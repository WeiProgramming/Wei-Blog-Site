import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {AngularFireAuth} from "@angular/fire/auth";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  articles: any[];
  userId: string;

  constructor(private dbService: DatabaseService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        console.log(user);
        this.userId = user.uid;
        this.createItem();
        this.articles = this.dbService.getArticles(`personal/${this.userId}`);
        console.log(this.articles);
      }
    })
  }

  ngOnInit() {}

  createItem() {
    this.dbService.createArticle(`personal/${this.userId}`, {picureUrl: '', title: 'test', description: 'mega testing description'});
  }
}
