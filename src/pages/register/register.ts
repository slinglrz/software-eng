import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user"
import{ AngularFireAuth } from 'angularfire2/auth';
import { Profile} from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database' 

import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage{
  user = {} as User;
  profile = {} as Profile;
  uid: string;
  

  
  constructor(private afAuth: AngularFireAuth,
    private afDatabase :AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams, ) {
  }


  async register(user: User,profile: Profile) 
  {

    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){ 
        this.afAuth.authState.take(1).subscribe(auth => {
          this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)  
            .then(()=> this.navCtrl.setRoot(HomePage));
          })}  
    }
    catch (e) {
      console.error(e);
    }

   }


  

}