import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('igleLocation');

    let mapOptions: GoogleMapOptions = {
      controls: {
        myLocationButton: true,
      },
      camera: {
        target: {
          lat: -26.787181,
          lng: -60.436987
        },
        zoom: 15,
        tilt: 0
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Iglesia de la Familia',
          snippet: 'Pastores: Carlos Cernik \nAndrés Neznajko\nHorarios: SÁBADOS: 20:30 (Adolescentes) 22:00hs (Jóvenes)\nDOMINGOS: 10:00 – 18:00 – 20:00hs',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: -26.787181,
            lng: -60.436987
          }
        })

      });
  }
}
