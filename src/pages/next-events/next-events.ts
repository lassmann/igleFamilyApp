import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import {NextEventsProvider} from '../../providers/next-events/next-events'
import {ModalEventPage} from '../../pages/modal-event/modal-event'

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private loadingCtrl: LoadingController, public nexEventsProvider: NextEventsProvider) {
  }

  showModal(event) {
    let modalOpts = {
      showBackdrop: true,
      enableBackdropDismiss: true
    }

    let eventModal = this.modalCtrl.create(ModalEventPage, event, modalOpts);
    eventModal.present();
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
      this.nextEvents = data;
      this.loadingPopup.dismiss();
    })
  }
}
