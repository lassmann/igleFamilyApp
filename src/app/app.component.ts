import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';
import { GalleryPage } from '../pages/gallery/gallery';
import { NextEventsPage } from '../pages/next-events/next-events';
import { FriendsGroupsPage } from '../pages/friends-groups/friends-groups';
import { CultsPage } from '../pages/cults/cults';
import { RadioPage } from '../pages/radio/radio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Videos', component: CultsPage },
      { title: 'Grupos de Amigos', component: FriendsGroupsPage },
      { title: 'Blog', component: BlogPage },
      { title: 'Próximos Eventos', component: NextEventsPage },
      { title: 'Radio', component: RadioPage },
      { title: 'Galeria', component: GalleryPage }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
