import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

import { ProductItem } from './product-items';
import { Category, categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyStoreCont';
  // categories = categories;

  // products: ProductItem[] = [];
  // filteredProducts: ProductItem[] = [...this.products];

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService
  //     .getProducts()
  //     .subscribe((newProducts) => (this.products = newProducts));
  // }

  // filterByCategory(filtered: Category) {
  //   this.filteredProducts = this.products.filter((product: ProductItem) => {
  //     return product.category.includes(filtered.name);
  //   });
  // }

  // reset() {
  //   this.filteredProducts = [...this.products];
  // }
}
