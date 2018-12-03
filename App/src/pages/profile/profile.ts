import { TrainingPage } from './../training/training';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  @ViewChild('trainingLineCanvas') trainingLineCanvas;
  @ViewChild('trainingRadarCanvas') trainingRadarCanvas;


  trainingLineChart: any;
  trainingRadarChart: any;
  userName: string;

  constructor(public navCtrl: NavController) {
    this.userName = "Oliver Laustsen";
  }

  ionViewDidLoad(){
    this.trainingLineChart = new Chart(this.trainingLineCanvas.nativeElement, {
      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "Climbing hours",
                  fill: true,
                  lineTension: 0.3,
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40],
                  spanGaps: false,
              },
          ]
      }
    });
    this.trainingRadarChart = new Chart(this.trainingRadarCanvas.nativeElement, {
      type: 'radar',
      data:{
        labels:["Crimps", "Jugs", "Sloppers", "Undercling", "Gaston", "Pockets"],
        datasets: [
          {
              label: "Skill Level",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(192,75,75,0.2)",
              borderColor: "rgba(192,75,75,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(192,75,75,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(192,75,75,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [30, 20, 42, 44, 52, 49, 80],
              spanGaps: false,
          }
        ]
      }
    });
  }
}
