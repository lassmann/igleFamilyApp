import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar,  private loadingCtrl: LoadingController, public nexEventsProvider: NextEventsProvider) {
  }

  createEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    this.calendar.createEventInteractively(title, location, notes, startDate, endDate)
  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Cargando...'
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextEventsPage');
  }

  ngOnInit() {
    this.loadingPopup.present();
    this.nexEventsProvider.getNextEvents().subscribe(data => {
      console.log('test', data)
      this.nextEvents = data;
      this.loadingPopup.dismiss();
    })
  }
}
