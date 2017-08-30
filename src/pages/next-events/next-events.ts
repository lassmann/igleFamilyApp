import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
const NEXTEVENTS = [{
  title: 'Escuela de líderes',
  startDate: '2017-08-30T21:00',
  endDate: '2017-08-30T22:30',
  description: 'Es un espacio creado para la Formación Teológica y Ministerial de Líderes de Grupos de Amigos y Ministerios de la Iglesia de la Familia. Les brinda la posibilidad de compartir las problemáticas y encontrar consejo y guía a la luz de la Palabra de Dios; como así también estudiar y profundizar en las doctrinas fundamentales del Cristianismo.',
  address: 'Laprida 243, Presidencia Roque Sáenz Peña, Chaco, 3700, Argentina.',
  img: 'http://iglesiadelafamilia.com/wp-content/uploads/2017/08/4.png'
}];

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
  nextEvents = NEXTEVENTS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextEventsPage');
  }

}
