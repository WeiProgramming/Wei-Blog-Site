import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public articleList: AngularFireList<any>;
  todosKeyValues = [];

  constructor(private db: AngularFireDatabase) { }

  getAllArticles() {
    this.db.list(`articles/business`).snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.todosKeyValues.push({$key: id, value: value});
      });
      return;
    });
    this.db.list(`articles/personal`).snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.todosKeyValues.push({$key: id, value: value});
      });
      return;
    });
    this.db.list(`articles/random`).snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.todosKeyValues.push({$key: id, value: value});
      });
      return;
    });

    return this.todosKeyValues;
  }

  getArticles(tableName: string): Array<any> {
    this.articleList = this.db.list(`/${tableName}`);
    // this.itemList.valueChanges().subscribe(res => console.log(res));

    this.articleList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.todosKeyValues.push({$key: id, value: value});
      });
      return;
    });
    return this.todosKeyValues;
  }
  createArticle(tableName: string, formData: object) {
    this.db.list(`/${tableName}`).push(formData);
  }
}
