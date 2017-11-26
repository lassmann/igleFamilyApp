import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us';
import { LocationPage } from '../pages/location/location';
import { BlogPage } from '../pages/blog/blog';
import { BlogDetailPage } from '../pages/blog-detail/blog-detail';
import { GalleryPage } from '../pages/gallery/gallery';
import { SocialNetworksPage } from '../pages/social-networks/social-networks';
import { NextEventsPage } from '../pages/next-events/next-events';
import { RadioPage } from '../pages/radio/radio';
import { FriendsGroupsPage } from '../pages/friends-groups/friends-groups';
import { VideosPage } from '../pages/videos/videos';
import { ModalEventPage } from '../pages/modal-event/modal-event';
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
import { LocationsProvider } from '../providers/locations/locations';

export const firebaseConfig = {
  apiKey: 'AIzaSyBoGWxYlO-MPlpB5FKdM4SxYw7kAFBXGCE',
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
    BlogDetailPage,
    AboutUsPage,
    LocationPage,
    GalleryPage,
    NextEventsPage,
    RadioPage,
    SocialNetworksPage,
    FriendsGroupsPage,
    VideosPage,
    ModalEventPage,
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
    BlogDetailPage,
    AboutUsPage,
    LocationPage,
    SocialNetworksPage,
    GalleryPage,
    NextEventsPage,
    RadioPage,
    FriendsGroupsPage,
    VideosPage,
    ModalEventPage
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
    VideosProvider,
    LocationsProvider
  ]
})
export class AppModule {
}
