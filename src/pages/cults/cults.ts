import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { VideosProvider } from '../../providers/videos/videos';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the CultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cults',
  templateUrl: 'cults.html',
})
export class CultsPage {
  videos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private videosProvider: VideosProvider, private youtube: YoutubeVideoPlayer) {
    //constructor(public navCtrl: NavController, public navParams: NavParams, private videosProvider: VideosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CultsPage');
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
