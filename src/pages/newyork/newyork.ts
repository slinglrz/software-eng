import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result'
/**
 * Generated class for the NewyorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newyork',
  templateUrl: 'newyork.html',
})
export class NewyorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goResultPage() {
    this.navCtrl.push(ResultPage);
  }

}
