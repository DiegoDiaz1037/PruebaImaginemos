import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }
}
