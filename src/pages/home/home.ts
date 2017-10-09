import {OverviewPage} from '../overview/overview';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bolusCounter: number;
  eierkoekCounter: number;

  constructor(public navCtrl: NavController) {
    this.bolusCounter = 0;
    this.eierkoekCounter = 0;
  }

  addBolus(): void {
    this.bolusCounter = this.bolusCounter + 1;
  }

  addEierkoek(): void {
    this.eierkoekCounter = this.eierkoekCounter + 1;
  }

  minBolus(): void {
    this.bolusCounter = this.bolusCounter > 0 ? this.bolusCounter - 1 : 0;
  }

  minEierkoek(): void {
    this.eierkoekCounter = this.eierkoekCounter > 0 ? this.eierkoekCounter - 1 : 0;
  }

  clear(): void {
    this.bolusCounter = 0;
    this.eierkoekCounter = 0;  }

  itemTapped(event, bolusCounter, eierkoekCounter) {
    this.navCtrl.push(OverviewPage, {
      bolusCounter: bolusCounter,
      eierkoekCounter: eierkoekCounter
    });
  }
}
