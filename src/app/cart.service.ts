import { Injectable } from '@angular/core';

@Injectable({
  providedIn : "root"
})
export class CartService {

  constructor() { }

  items = [];

  addToCart(product){
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

}