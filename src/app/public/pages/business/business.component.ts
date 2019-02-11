import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../shared/database/database.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {fadeIn} from '../../../shared/animations/fadein';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  animations: [fadeIn]
})
export class BusinessComponent implements OnInit {
  articles: any[];
  articleText = 'business';

  constructor(private dbService: DatabaseService, private auth: AngularFireAuth) { }

  ngOnInit() {
        this.articles = this.dbService.getArticles(`articles/${this.articleText}`);
  }

}
