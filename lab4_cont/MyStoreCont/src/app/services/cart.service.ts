import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../product-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ProductItem[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: ProductItem) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
