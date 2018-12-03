
import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, NavParams, Tabs } from 'ionic-angular'

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
  @ViewChild("tabBar") tabBar: Tabs;

  constructor(public navParams: NavParams, private alertCtrl: AlertController, private navCtrl: NavController) {
  }

  popUpCreateRoute(){
    let alert = this.alertCtrl.create({
      title: "Do you want to?",
      buttons:[
        {
        text: "Ys",
        handler: () => {
          this.navCtrl.parent.select(3);
        }
      },
      {
        text: "No",
        handler: () => {

        }
      }
    ]
    });
    alert.present();
  }
}
