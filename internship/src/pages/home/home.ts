import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListNewsPage } from '../list-news/list-news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  password:any;

  constructor(public navCtrl: NavController) {

  }
  switchListNewsPage(){
    this.login();
    this.navCtrl.push(ListNewsPage)
  }
  login(){
    

  }
  

}
