import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import{ AngularFireAuth } from 'angularfire2/auth';
import { HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,) {
  }

  async login(user: User){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.push(HomePage);
      }
      
    }
    catch(e){
      let alert = this.alertCtrl.create({
        title: 'Login ERROR',
        subTitle: 'Plest cheak email or password',
        buttons: ['Dismiss']
      });
      alert.present();
    }

  }
  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
