import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CultsPage } from './cults';

@NgModule({
  declarations: [
    CultsPage,
  ],
  imports: [
    IonicPageModule.forChild(CultsPage),
  ],
})
export class CultsPageModule {}
