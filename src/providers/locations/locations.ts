import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationsProvider {
friendsLocations;
  constructor(public http: Http, db: AngularFireDatabase) {
    this.friendsLocations = db.list('/friendsLocations')
  }

  getFriendsLocations(){
    return this.friendsLocations
  }

}
