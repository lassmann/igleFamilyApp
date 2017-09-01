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
      controls: {
        myLocationButton: true,
      },
      camera: {
        target: {
          lat: -26.787181,
          lng: -60.436987
        },
        zoom: 14,
        tilt: 0
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        this.map.addMarkerCluster({
          markers: [
            {
              title: 'Iglesia de la Familia',
              snippet: 'Lider: SOSA, Gisela\nHorario: SAB 17:00hs',
              icon: 'red',
              animation: 'DROP',
              position: {
                lat: -26.787181,
                lng: -60.436987
              }
            },
            {
              title: 'Anfitrion: Raul Cernik',
              icon: 'red',
              snippet: 'Lider: Ricardo Baby\nHorario: LUN 20:30hs',
              animation: 'DROP',
              position: {
                lat: -26.789805,
                lng: -60.441503
              }
            },
            {
              title: 'Anfitrion: BEHEMETIUCK, Natalia',
              icon: 'red',
              snippet: 'Lider: DIAZ, María Jose\nHorario: MIE 20:00hs',
              animation: 'DROP',
              position: {
                lat: -27.466883,
                lng: -58.790912
              }
            },
            {
              title: 'Anfitrion: BOHACECK ARAUJO, Luciana',
              icon: 'red',
              snippet: 'Lider: MACKO, Josias\nHorario: JUE 20:30hs',
              animation: 'DROP',
              position: {
                lat: -27.468133,
                lng: -58.841132
              }
            },
            {
              title: 'Anfitrion: PITRA, Carla',
              icon: 'red',
              snippet: 'Lider: VIDENOFF, Karen\nHorario: MIE 21:00hs',
              animation: 'DROP',
              position: {
                lat: -26.787338,
                lng: -60.432256
              }
            },
            {
              title: 'Anfitrion: BABY, Miriam',
              icon: 'red',
              snippet: 'Lider: BABY, Carina\nHorario: LUN 20:00hs',
              animation: 'DROP',
              position: {
                lat: -26.776289,
                lng: -60.439459
              }
            },
            {
              title: 'Anfitrion: TORALES, Sheila',
              icon: 'red',
              snippet: 'Lider: TORALES, Tayhana\nHorario: MAR 15:45hs',
              animation: 'DROP',
              position: {
                lat: -26.784988,
                lng: -60.441826
              }
            },
            {
              title: 'Anfitrion: TEITELBAUM, Anaclara',
              icon: 'red',
              snippet: 'Lider: LELLES, Priscila\nHorario: LUN 18:30hs',
              animation: 'DROP',
              position: {
                lat: -31.426058,
                lng: -64.179813
              }
            }
          ],
          icons: []
        })
      });
  }


}
