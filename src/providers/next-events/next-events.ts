import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NextEventsProvider {
  events:FirebaseListObservable<any>;

  constructor(public http: Http, db: AngularFireDatabase) {
    this.events = db.list('/events')
  }

  getNextEvents() {
    return this.events;
  }


}
