import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {Article} from "../../models/Article";
import {AuthService} from "../../../shared/auth/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articleData: Article;
  userID: any;
  ArticleForm: FormGroup;
  type: string;
  title: string;
  message: string;
  image: any;
  constructor(private db: DatabaseService,
              private authService: AuthService,
              public fb: FormBuilder) {
    authService.getUser().subscribe(user => {
      if(user) {
        return this.userID = user.uid;
      }
    });
  }

  ngOnInit() {
    this.articleData = { title: 'test', description: 'mega testing description', pictureUrl: ''};
    this.ArticleForm = this.fb.group({
      type: [''],
      title: [''],
      message: [''],
      image: ['']
    });
    this.ArticleForm.valueChanges.subscribe(formData =>  {
      this.type = formData.type;
      this.title = formData.title;
      this.message = formData.message;
      this.image = ''
    });
  }
  onSubmit() {
  }

  createArticle() {
    this.db.createArticle(`personal/${this.userID}`, this.articleData )
  }
  tryLogout() {
    this.authService.doLogout();
  }
}
