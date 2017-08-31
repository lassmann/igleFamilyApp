import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const NEXTEVENTS = [{
  title: 'Escuela de líderes',
  startDate: '2017-09-30T21:00',
  endDate: '2017-09-30T22:30',
  description: 'Es un espacio creado para la Formación Teológica y Ministerial de Líderes de Grupos de Amigos y Ministerios de la Iglesia de la Familia. Les brinda la posibilidad de compartir las problemáticas y encontrar consejo y guía a la luz de la Palabra de Dios; como así también estudiar y profundizar en las doctrinas fundamentales del Cristianismo.',
  address: 'Laprida 243, Presidencia Roque Sáenz Peña, Chaco, 3700, Argentina.',
  img: 'http://iglesiadelafamilia.com/wp-content/uploads/2017/08/4.png'
}, {
  title: 'Reunion de hombres',
  startDate: '2017-09-13T21:00',
  endDate: '2017-09-14T00:00',
  description: 'Es un espacio creado para la Formación Teológica y Ministerial de Líderes de Grupos de Amigos y Ministerios de la Iglesia de la Familia. Les brinda la posibilidad de compartir las problemáticas y encontrar consejo y guía a la luz de la Palabra de Dios; como así también estudiar y profundizar en las doctrinas fundamentales del Cristianismo.',
  address: 'Laprida 243, Presidencia Roque Sáenz Peña, Chaco, 3700, Argentina.',
  img: 'http://iglesiadelafamilia.com/wp-content/uploads/2017/08/4.png'
}, {
  title: 'Reunion de mujeres',
  startDate: '2017-09-09T21:00',
  endDate: '2017-09-10T00:00',
  description: 'Es un espacio creado para la Formación Teológica y Ministerial de Líderes de Grupos de Amigos y Ministerios de la Iglesia de la Familia. Les brinda la posibilidad de compartir las problemáticas y encontrar consejo y guía a la luz de la Palabra de Dios; como así también estudiar y profundizar en las doctrinas fundamentales del Cristianismo.',
  address: 'Laprida 243, Presidencia Roque Sáenz Peña, Chaco, 3700, Argentina.',
  img: 'http://iglesiadelafamilia.com/wp-content/uploads/2017/08/4.png'
}];
/*
  Generated class for the NextEventsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NextEventsProvider {

  constructor(public http: Http) {
  }

  getNextEvents(){
    return Promise.resolve(NEXTEVENTS);
  }

  getNextEventsSlowly() {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getNextEvents()), 2000);
    });
  }

}
