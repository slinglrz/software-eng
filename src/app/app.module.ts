import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireList } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EstPage } from '../pages/est/est';
import { NewyorkPage } from '../pages/newyork/newyork';
import { BeefPage } from '../pages/beef/beef';
import { ConPage } from '../pages/con/con';
import { FinalPage } from '../pages/final/final';
import { PayPage } from '../pages/pay/pay';
import { ResultPage } from '../pages/result/result';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BeefPage,
    NewyorkPage,
    EstPage,
    PayPage,
    ConPage,
    FinalPage,
    ResultPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BeefPage,
    NewyorkPage,
    EstPage,
    PayPage,
    ConPage,
    FinalPage,
    ResultPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
