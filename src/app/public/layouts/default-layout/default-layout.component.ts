import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public books: AngularFireList<any>;
  public keys: any;
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.books = this.db.list('/todos');
    this.keys =  this.books.snapshotChanges().subscribe(res => {
     res.map(item => ({key: item.payload.key}));
    });
    console.log(this.keys);
  }
}
