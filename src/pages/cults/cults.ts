import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VideosProvider} from '../../providers/videos/videos'
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private videosProvider: VideosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CultsPage');
  }

  ngOnInit(){
    this.videosProvider.getVideos().then(videos => {
      console.log('test', videos)
      this.videos = videos
    })
  }

}
