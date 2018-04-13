import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { LocationsProvider } from '../../providers/locations/locations';

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
  friendsLocations;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, private loadingCtrl: LoadingController, private googleMaps: GoogleMaps, private locationProvider: LocationsProvider) {

    this.platform.ready().then(() => {
      this.loadingPopup.present();
      return this.locationProvider.getFriendsLocations().subscribe(data => {
        this.friendsLocations = data;
        this.loadingPopup.dismiss();
        this.loadMap();
      })
    })

  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Cargando...'
  });

  ionViewDidLoad() {
    // this.loadMap();
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
        return this.map.addMarkerCluster({
          markers: this.friendsLocations,
          icons: []
        })
      });
  }


}
