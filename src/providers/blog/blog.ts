import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogProvider {
  blog: FirebaseListObservable<any>;

  constructor(public http: Http, db: AngularFireDatabase) {
    this.blog = db.list('/blog')
  }

  getEntries() {
    return this.blog;
  }

}
