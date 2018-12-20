import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewyorkPage } from './newyork';

@NgModule({
  declarations: [
    NewyorkPage,
  ],
  imports: [
    IonicPageModule.forChild(NewyorkPage),
  ],
})
export class NewyorkPageModule {}
