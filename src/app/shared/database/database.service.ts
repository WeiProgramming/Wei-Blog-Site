import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public articleList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getArticles(tableName: string): Array<any> {
    this.articleList = this.db.list(`/${tableName}`);
    // this.itemList.valueChanges().subscribe(res => console.log(res));
    const todosKeyValues = [];

    this.articleList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        todosKeyValues.push({$key: id, value: value});
      });
      return;
    });
    return todosKeyValues;
  }
  createArticle(tableName: string, formData: object) {
    this.db.list(`/${tableName}`).push(formData);
  }
  removeArticle(tablePath) {
    this.db.object(tablePath).remove();
  }
}
