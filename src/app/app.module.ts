import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { GalleryPage } from '../pages/gallery/gallery';
import { NextEventsPage } from '../pages/next-events/next-events';
import { RadioPage } from '../pages/radio/radio';
import { FriendsGroupsPage } from '../pages/friends-groups/friends-groups';
import { CultsPage } from '../pages/cults/cults';
import { Calendar } from '@ionic-native/calendar';
import { EmailComposer } from '@ionic-native/email-composer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LOCALE_ID } from '@angular/core';
import { NextEventsProvider } from '../providers/next-events/next-events';
import { HttpModule } from '@angular/http';
import { BlogProvider } from '../providers/blog/blog';
import { YouTubePipe } from '../pipes/you-tube/you-tube';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { GoogleMaps } from '@ionic-native/google-maps';
import { GalleryProvider } from '../providers/gallery/gallery';
import { VideosProvider } from '../providers/videos/videos';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyDvNC4xexz7ICq4XF0VhDq0hd9FeJOzfkg',
  authDomain: 'igle-family-30ebf.firebaseapp.com',
  databaseURL: 'https://igle-family-30ebf.firebaseio.com',
  projectId: 'igle-family-30ebf',
  storageBucket: 'igle-family-30ebf.appspot.com',
  messagingSenderId: '659164393702'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlogPage,
    ContactUsPage,
    GalleryPage,
    NextEventsPage,
    RadioPage,
    FriendsGroupsPage,
    CultsPage,
    YouTubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlogPage,
    ContactUsPage,
    GalleryPage,
    NextEventsPage,
    RadioPage,
    FriendsGroupsPage,
    CultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    EmailComposer,
    GoogleMaps,
    YoutubeVideoPlayer,
    { provide: LOCALE_ID, useValue: "es-AR" },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NextEventsProvider,
    BlogProvider,
    GalleryProvider,
    VideosProvider
  ]
})
export class AppModule {
}
