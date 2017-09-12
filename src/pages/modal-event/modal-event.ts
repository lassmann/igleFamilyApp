import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the ModalEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-event',
  templateUrl: 'modal-event.html',
})
export class ModalEventPage {
  event;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private calendar: Calendar, public navParams: NavParams) {
    console.log('test', navParams.data)
    this.event = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEventPage');
  }

  createEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    this.calendar.createEventInteractively(title, location, notes, startDate, endDate)
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
