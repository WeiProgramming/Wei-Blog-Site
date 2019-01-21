import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public itemList: AngularFireList<any>;
  todosKeyValues = [];



  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.itemList = this.db.list('/articles');
    // this.itemList.valueChanges().subscribe(res => console.log(res));

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const value = action.payload.val();
        const id = action.payload.key;
        this.todosKeyValues .push({$key: id, value: value});
      });
    });
    console.log(this.todosKeyValues);
   this.db.list('/articles').push({title: 'hi', description: 'welcome', pictureUrl: 'https://images.unsplash.com/photo-1536009744269-d24508b32196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'});
  }

}
