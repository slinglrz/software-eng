import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeefPage } from './beef';

@NgModule({
  declarations: [
    BeefPage,
  ],
  imports: [
    IonicPageModule.forChild(BeefPage),
  ],
})
export class BeefPageModule {}
