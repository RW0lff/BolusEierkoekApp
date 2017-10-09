import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
  nrOfBolusBags: number;
  nrOfEierkoekBags: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nrOfBolusBags = Math.ceil(navParams.get("bolusCounter") / 4);
    this.nrOfEierkoekBags = Math.ceil(navParams.get("eierkoekCounter") / 4);
  }
}
