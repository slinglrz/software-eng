import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result'

/**
 * Generated class for the EstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-est',
  templateUrl: 'est.html',
})
export class EstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goResultPage() {
    this.navCtrl.push(ResultPage);
  }
}
