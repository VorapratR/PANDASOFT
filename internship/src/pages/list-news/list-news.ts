import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular'; 
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { SingleNewsPage } from '../single-news/single-news';
/**
 * Generated class for the ListNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-news',
  templateUrl: 'list-news.html',
})
export class ListNewsPage {

  url:string; 
  data:string; 
    
  constructor(public http: Http, public navCtrl: NavController) {
  }
  switchSingleNewsPage(){
    this.navCtrl.push(SingleNewsPage)
  }
  ionViewDidLoad(){
        this.loadUser();
  }
  loadUser() {
        this.http.get('https://5c065a3fc16e1200139479cc.mockapi.io/api/v1/news')
            .map(res => res.json())
            .subscribe (data => {
              this.data = data.data; 
              console.log(data.data);
        }, err => {
               console.log(err);
            });
  }

}
