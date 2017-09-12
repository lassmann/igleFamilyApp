import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {VideosProvider} from '../../providers/videos/videos';
import {Observable} from 'rxjs/Observable';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';

/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  videos: Observable<any[]>;

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer, private platform: Platform, public navParams: NavParams, private videosProvider: VideosProvider ) {
    this.videos = this.videosProvider.getListVideos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

  openVideo(video) {
    if (this.platform.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }

  }

}
