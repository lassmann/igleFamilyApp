import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
 Generated class for the VideosProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class VideosProvider {
  videos: FirebaseListObservable<any>;
  constructor(public http: Http,  db: AngularFireDatabase) {
    this.videos = db.list('/videos')
  }

  getVideos() {
    return this.videos
  }

}
