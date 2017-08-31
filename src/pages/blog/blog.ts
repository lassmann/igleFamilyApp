import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  ngOnInit() {
    this.blogProvider.getEntries().then(entries => this.blog = entries)
  }

}
