import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';
import { NextEventsPage } from '../pages/next-events/next-events';
import { FriendsGroupsPage } from '../pages/friends-groups/friends-groups';
import { VideosPage } from '../pages/videos/videos';
import { RadioPage } from '../pages/radio/radio';
import { SocialNetworksPage } from '../pages/social-networks/social-networks'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, androidIcon: string, iosIcon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, androidIcon: 'md-home', iosIcon: 'ios-home' },
      { title: 'Grupos de Amigos', component: FriendsGroupsPage, androidIcon: 'md-map', iosIcon: 'ios-map' },
      { title: 'Próximos Eventos', component: NextEventsPage, androidIcon: 'md-calendar', iosIcon: 'ios-calendar' },
      { title: 'Blog', component: BlogPage, androidIcon: 'md-book', iosIcon: 'ios-book' },
      { title: 'Redes Sociales', component: SocialNetworksPage, androidIcon: 'md-people', iosIcon: 'ios-people' },
      { title: 'Videos', component: VideosPage, androidIcon: 'md-videocam', iosIcon: 'ios-videocam' },
      { title: 'Radio', component: RadioPage, androidIcon: 'md-radio', iosIcon: 'ios-radio' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //por si se le ocurre ir para atras y salir
      this.platform.registerBackButtonAction(() => {
        this.nav.pop({})
      });
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
