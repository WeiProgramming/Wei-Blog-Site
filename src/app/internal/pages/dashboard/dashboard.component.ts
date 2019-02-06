import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {Article} from "../../models/Article";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articleData: Article;
  userID: string;
  constructor(private db: DatabaseService, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if(user) {
        this.userID = user.uid;
      }
    })
  }

  ngOnInit() {
    this.articleData = { title: 'test', description: 'mega testing description', pictureUrl: ''};
  }

  createArticle() {
    this.db.createArticle(`personal/${this.userID}`, this.articleData )
  }
}
