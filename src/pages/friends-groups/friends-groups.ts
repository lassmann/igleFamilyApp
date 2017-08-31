import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
/**
 * Generated class for the FriendsGroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends-groups',
  templateUrl: 'friends-groups.html',
})
export class FriendsGroupsPage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -26.787181,
          lng: -60.436987
        },
        zoom: 13,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        this.map.addMarker({
          title: 'Iglesia de la Familia',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: -26.787181,
            lng: -60.436987
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('Lider: Andres Neznazko, Horario: MARTES 20:30hs');
              });
          });

        this.map.addMarker({
          title: 'Casa: Raul Cernik',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: -26.789805,
            lng: -60.441503
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('Lider: Ricardo Baby, Horario: LUNES 20:30hs');
              });
          });

      });
  }


}
