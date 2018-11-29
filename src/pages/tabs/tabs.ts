import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular'

import { NewsPage } from '../news/news'
import { TrainingPage } from '../training/training'
import { CreateRoutePage } from '../createRoute/createRoute'
import { ViewRoutePage } from '../viewRoute/viewRoute'
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  newsTab = NewsPage;
  trainingTab = TrainingPage;
  createRouteTab = CreateRoutePage;
  viewRouteTab = ViewRoutePage;
  profileTab = ProfilePage;

  constructor(private alertCtrl: AlertController) {

  }

  popUpCreateRoute(){

    let alert = this.alertCtrl.create({
      title: "Do you want to?",
      buttons:[
        {
        text: "New boulder",
      },
      {
        text: "Resume boulder"
      }
    ]
    });
    console.log("test");
    alert.present();
  }
}
