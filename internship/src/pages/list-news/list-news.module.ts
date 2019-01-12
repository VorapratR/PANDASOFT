import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListNewsPage } from './list-news';

@NgModule({
  declarations: [
    ListNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListNewsPage),
  ],
})
export class ListNewsPageModule {}
