import { Component, ElementRef, Directive } from '@angular/core';
import { NavController, Gesture } from 'ionic-angular';
import { directive } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-viewRoute',
  templateUrl: 'viewRoute.html',
})

@Directive({
  selector: '[longPress]',
})

export class ViewRoutePage {

  boulderSquare: HTMLElement;
  pressGesture: Gesture;
  releaseGesture: Gesture;

  nameOfSetter: string;
  nameOfRoute: string;
  gradeOfRoute: string;

  constructor(public navCtrl: NavController, boulderSquare: ElementRef) {

    this.boulderSquare = boulderSquare.nativeElement;

    this.nameOfSetter = "Oliver Laustsen";
    this.nameOfRoute = "Undercling Ding";
    this.gradeOfRoute = "7A+";
  }

  ngOnDestroy() {
    this.pressGesture.destroy();
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
    boulderSquareCol.setAttribute("press",'"=onPress($event)"');

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

  createPopUpImage(){
    var popUpDiv = document.createElement("div");
    var popUpImg = document.createElement("img");

    popUpDiv.className = "TODO";
    popUpImg.src = "https://fitness-gaming.com/images/Markets/Events_and_Fun/2707_augmented_climbing_wall_gets_global_service_package_through_new_partnership_with_entre_prises/008_augmented_climbing_wall.jpg";

  }
}
