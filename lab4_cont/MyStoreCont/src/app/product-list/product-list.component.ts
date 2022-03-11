import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { ProductItem, newProducts } from '../product-items';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // @Input() filteredProducts: ProductItem[] | undefined;
  categories = categories;

  products: ProductItem[] = [];
  filteredProducts: ProductItem[] = [...this.products];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
    this.productService
      .getProducts()
      .subscribe((products) => (this.filteredProducts = products));
  }

  filterByCategory(filtered: Category) {
    filtered.active = !filtered.active;
    if (filtered.active) {
      this.filteredProducts = this.products.filter((product: ProductItem) => {
        return product.category.includes(filtered.name);
      });
    } else {
      this.reset();
    }
  }

  reset() {
    this.filteredProducts = [...this.products];
  }
}
