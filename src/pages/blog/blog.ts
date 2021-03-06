import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog'
import { BlogDetailPage } from '../blog-detail/blog-detail'

/**
 * Generated class for the BlogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  blog;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Cargando...'
  });

  ngOnInit() {
    this.loadingPopup.present();
    this.blogProvider.getEntries().subscribe(data => {
      this.blog = data;
      this.loadingPopup.dismiss();
    })
  }

  readEntry(entry) {
    this.navCtrl.push(BlogDetailPage, { entry });
  }

}
