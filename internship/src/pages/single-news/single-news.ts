import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SingleNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-news',
  templateUrl: 'single-news.html',
})
export class SingleNewsPage {
  item:object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item =navParams.get('item')
      
  }


}
