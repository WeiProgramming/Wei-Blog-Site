import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../models/Article';
import {DatabaseService} from '../../../shared/database/database.service';
import {AuthService} from '../../../shared/auth/auth.service';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  title: string;
  message: string;
  currentImagePath: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  imageUploadEvent: any;

  constructor(private db: DatabaseService,
              private authService: AuthService,
              private storage: AngularFireStorage,
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
      this.title = formData.title;
      this.message = formData.message;
    });
    this.selectedArticles = this.db.getArticles(`articles/business`);
    this.currentActiveTab = 'business';
  }
  onSubmit() {
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
    let dbPath;
    // Gets the type of article
    const type = this.ArticleForm.controls['type'].value;
    // Run the image upload tast
    this.task = this.ref.put(this.imageUploadEvent.target.files[0]);
    this.task.snapshotChanges().pipe(  finalize(() => {
      this.ref.getDownloadURL().subscribe(url => {
        // Finalize executes once the upload process is over look for the post nad update it with the pic url and downloadedurl
        this.db.editArticle(`articles/${type}/${dbPath.key}`, {picUrl: this.currentImagePath, downloadedUrl: url});
      });
    })).subscribe((progress) => console.log(progress));
    this.articleData = new Article(this.title, this.message, this.userID);
    this.articleData['createdAt'] = this.getCurrentDay();

    dbPath = this.db.createArticle(`articles/${type}`, this.articleData );
  }
  upload(event) {
    this.imageUploadEvent = event;
    this.currentImagePath = `images/${new Date().getTime()}/_${this.imageUploadEvent.target.files[0].name}`;
    this.ref = this.storage.ref(this.currentImagePath);
  }
}
