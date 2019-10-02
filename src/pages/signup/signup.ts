import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { ProductsPage } from '../products/products';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

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
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
