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

  ionViewDidLoad(){
    for (let i = 0; i < 20; i++) {
      this.CreateAndPopulateViewRoutePage();  
    }
  }

  CreateAndPopulateViewRoutePage(){
    var boulderSquareCol = document.createElement("ion-col");
    var boulderSquareCard = document.createElement("ion-card");
    var boulderSquareNameOfSetter = document.createElement("p");
    var boulderSquareGradeOfRoute = document.createElement("h1");
    var boulderSquareNameOfRoute = document.createElement("p");

    boulderSquareCol.className = "col";
    boulderSquareCard.className = "card card-md"

    var bouldernameOfRoute = document.createTextNode(this.nameOfRoute + "");
    var bouldergradeOfRoute = document.createTextNode(this.gradeOfRoute + "");
    var bouldernameOfSetter = document.createTextNode(this.nameOfSetter + "");

    boulderSquareNameOfRoute.appendChild(bouldernameOfRoute);
    boulderSquareGradeOfRoute.appendChild(bouldergradeOfRoute);
    boulderSquareNameOfSetter.appendChild(bouldernameOfSetter);

    var boulderSquareRow = document.getElementById("boulderSquareRow");

    boulderSquareCard.appendChild(boulderSquareNameOfRoute);
    boulderSquareCard.appendChild(boulderSquareGradeOfRoute);
    boulderSquareCard.appendChild(boulderSquareNameOfSetter);

    boulderSquareCol.appendChild(boulderSquareCard)
    boulderSquareRow.appendChild(boulderSquareCol);
  }

}
