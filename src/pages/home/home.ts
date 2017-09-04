import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { RadioPage } from '../../pages/radio/radio';
import { AboutUsPage } from '../../pages/about-us/about-us';
import { LocationPage } from '../../pages/location/location';
import { FriendsGroupsPage } from '../../pages/friends-groups/friends-groups';
import { GalleryPage } from '../../pages/gallery/gallery';
import { CultsPage } from '../../pages/cults/cults';
import { BlogPage } from '../../pages/blog/blog';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  contact() {
    let email = {
      to: 'iglesiadelafamilia@gmail.com',
      subject: 'Contacto',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  goToAboutUs() {
    this.navCtrl.push(AboutUsPage);
  }

  goToLocation() {
    this.navCtrl.push(LocationPage);
  }

  goToRadio() {
    this.navCtrl.push(RadioPage);
  }

  goToFriendsGroup() {
    this.navCtrl.push(FriendsGroupsPage);
  }

  goToGallery() {
    this.navCtrl.push(GalleryPage);
  }

  goToBlog() {
    this.navCtrl.push(BlogPage);
  }

  goToVideos() {
    this.navCtrl.push(CultsPage);
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
