import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { RadioPage } from '../../pages/radio/radio';
import { AboutUsPage } from '../../pages/about-us/about-us';
import { LocationPage } from '../../pages/location/location';
import { FriendsGroupsPage } from '../../pages/friends-groups/friends-groups';
import { NextEventsPage } from '../../pages/next-events/next-events';
import { CultsPage } from '../../pages/cults/cults';
import { BlogPage } from '../../pages/blog/blog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
  }

  contact() {
    let email = {
      to: 'iglesiadelafamilia@gmail.com',
      subject: 'Contacto',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  goToAboutUs() {
    this.navCtrl.push(AboutUsPage);
  }

  goToLocation() {
    this.navCtrl.push(LocationPage);
  }

  goToRadio() {
    this.navCtrl.push(RadioPage);
  }

  goToFriendsGroup() {
    this.navCtrl.push(FriendsGroupsPage);
  }

  goToNextEvents() {
    this.navCtrl.push(NextEventsPage);
  }

  goToBlog() {
    this.navCtrl.push(BlogPage);
  }

  goToVideos() {
    this.navCtrl.push(CultsPage);
  }

}
