import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { ProductsPage } from '../products/products';
import { OrderPage } from '../order/order';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCategories(params){
    if (!params) params = {};
    this.navCtrl.push(CategoriesPage);
  }goToProducts(params){
    if (!params) params = {};
    this.navCtrl.push(ProductsPage);
  }goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
