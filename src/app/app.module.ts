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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlogPage,
    ContactUsPage,
    GalleryPage,
    NextEventsPage,
    RadioPage
  ],
  imports: [
    BrowserModule,
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
    RadioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
