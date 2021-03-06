import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage:any;

  constructor(platform:Platform) {
    platform.ready().then(() => {

      if (localStorage.getItem('id_token') != '' && localStorage.getItem('id_token')) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }

      console.log('home page');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
