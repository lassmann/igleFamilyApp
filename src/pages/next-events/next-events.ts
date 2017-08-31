import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { NextEventsProvider } from '../../providers/next-events/next-events'

/**
 * Generated class for the NextEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-events',
  templateUrl: 'next-events.html',
})
export class NextEventsPage {
  nextEvents;

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, public nexEventsProvider: NextEventsProvider) {
  }

  createEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date) {
    this.calendar.createEventInteractively(title, location, notes, startDate, endDate)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextEventsPage');
  }

  ngOnInit() {
    this.nexEventsProvider.getNextEventsSlowly().then(events => this.nextEvents = events)
  }
}
