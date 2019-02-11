import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../models/Article';
import {DatabaseService} from '../../../shared/database/database.service';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-make-article',
  templateUrl: './make-article.component.html',
  styleUrls: ['./make-article.component.scss']
})
export class MakeArticleComponent implements OnInit {
  // Variable that holds the data from db
  selectedArticles: any;
  // This is the asticle obj
  articleData: Article;
  // Current Opened tab
  currentActiveTab: string;
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

  }

  ngOnInit() {
    this.ArticleForm = this.fb.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
      image: ['']
    });
    this.ArticleForm.valueChanges.subscribe(formData =>  {
      this.type = formData.type;
      this.title = formData.title;
      this.message = formData.message;
      this.image = 'assets/images/business-bg.jpg';
    });
    this.selectedArticles = this.db.getArticles(`articles/business`);
    this.currentActiveTab = 'business';
  }
  onSubmit() {
    console.log(this.ArticleForm);
    this.createArticle();
    this.resetForm();
  }
  getCurrentDay(): string {
    const date = new Date();
    return date.toDateString();
  }
  resetForm() {
    this.ArticleForm.reset();
  }
  // Uses values from reactive forms and sends it to the nosql firebase db
  createArticle() {
    this.articleData = new Article(this.title, this.message, this.image, this.userID);
    this.articleData['createdAt'] = this.getCurrentDay();
    this.db.createArticle(`articles/${this.type}`, this.articleData );
  }

}
