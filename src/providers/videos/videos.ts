import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

/*
 Generated class for the VideosProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class VideosProvider {
  apiKey = 'AIzaSyBoGWxYlO-MPlpB5FKdM4SxYw7kAFBXGCE';
  videos: FirebaseListObservable<any>;

  constructor(public http: Http, db: AngularFireDatabase) {
    this.videos = db.list('/videos')
  }

  getVideos() {
    return this.videos
  }

  getListVideos() {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUVlmeYIxIxqFu4sRK8b4W9w&key=' + this.apiKey + '&part=snippet&maxResults=50')
      .map((res) => {
        return res.json()['items'];
      })
  }
}
