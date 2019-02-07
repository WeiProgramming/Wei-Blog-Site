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

  constructor(private dbService: DatabaseService, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe(user => {
      if(user) {
        this.userId = user.uid;
        this.articles = this.dbService.getArticles(`personal/${this.userId}`);
      }
    })
  }

}
