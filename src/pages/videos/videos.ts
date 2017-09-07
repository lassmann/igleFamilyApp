import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { VideosProvider } from '../../providers/videos/videos';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
  videos;

  //constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private videosProvider: VideosProvider, private youtube: YoutubeVideoPlayer) {
    constructor(public navCtrl: NavController, public navParams: NavParams, private videosProvider: VideosProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Cargando...'
  });

  ngOnInit() {
    this.loadingPopup.present();
    this.videosProvider.getVideos().subscribe(data => {
      this.videos = data;
      this.loadingPopup.dismiss();
    })
  }


}
