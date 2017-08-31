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
import {HttpModule} from '@angular/http';
import { BlogProvider } from '../providers/blog/blog';
import { CultsProvider } from '../providers/cults/cults';

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
    CultsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    { provide: LOCALE_ID, useValue: "es-AR" },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NextEventsProvider,
    BlogProvider,
    CultsProvider
  ]
})
export class AppModule {}
