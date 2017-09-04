import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {
  entry;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.entry = this.navParams.get("entry");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogDetailPage');
  }

}
