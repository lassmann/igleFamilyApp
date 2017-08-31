import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const VIDEOS = [
  {
    title: 'Iglesia de la Familia',
    url: 'https://www.youtube.com/watch?v=vkueDK--07U'

  }, {
    title: 'Nuestro origen - Historia de Iglesia de la Familia',
    url: 'https://www.youtube.com/watch?v=DGAjLSoh-6M'
  },
  {
    title: 'Comedor Shire',
    url: 'https://www.youtube.com/watch?v=MWT56Wr9Rrs'
  },
  {
    title: 'IEJ Chaco',
    url: 'https://www.youtube.com/watch?v=8ReVYoWMok4'
  }];

/*
 Generated class for the VideosProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class VideosProvider {

  constructor(public http: Http) {
    console.log('Hello VideosProvider Provider');
  }

  getVideos() {
    return Promise.resolve(VIDEOS)
  }

}
