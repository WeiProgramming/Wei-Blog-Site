import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../shared/database/database.service";
import {Article} from "../../models/Article";
import {AuthService} from "../../../shared/auth/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {fadeOut} from '../../../shared/animations/fadeout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeOut]
})
export class DashboardComponent implements OnInit {
  allArticles: any;
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
      if (user) {
        return this.userID = user.uid;
      }
    });
    this.allArticles = db.getAllArticles();
    console.log(this.allArticles);

  }

  ngOnInit() {
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
      this.image = 'assets/images/business-bg.jpg';
    });
  }
  onSubmit() {
    // console.log(this.ArticleForm.value);
    this.createArticle();
  }

  // Uses values from reactive forms and sends it to the nosql firebase db
  createArticle() {
    this.articleData = new Article(this.title, this.message, this.image, this.userID);
    this.articleData['createdAt'] = this.getCurrentDay();
    this.db.createArticle(`articles/${this.type}`, this.articleData );
  }
  getCurrentDay(): string {
    const date = new Date();
    return date.toDateString() + ' ' + date.toTimeString();
  }
  resetForm() {
    this.ArticleForm.reset();
  }
  tryLogout() {
    this.authService.doLogout();
  }
}
