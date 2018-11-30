import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-viewRoute',
  templateUrl: 'viewRoute.html'
})
export class ViewRoutePage {

  nameOfSetter: string;
  nameOfRoute: string;
  gradeOfRoute: string;

  constructor(public navCtrl: NavController) {
    this.nameOfSetter = "Oliver Laustsen";
    this.nameOfRoute = "Undercling Ding";
    this.gradeOfRoute = "7A+"
  }

}
