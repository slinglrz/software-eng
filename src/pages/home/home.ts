import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstPage } from '../est/est';
import { NewyorkPage } from '../newyork/newyork';
import { BeefPage } from '../beef/beef';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goESTPage(){
    this.navCtrl.push(EstPage);
  }
  goNewYorkPage(){
    this.navCtrl.push(NewyorkPage);
  }
  goBeefPage(){
    this.navCtrl.push(BeefPage);
  }
}
