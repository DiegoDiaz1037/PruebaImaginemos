import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  constructor(public navCtrl: NavController) {
  }
  goToProducts(params){
    if (!params) params = {};
    this.navCtrl.push(ProductsPage);
  }goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
