import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';

import { ProductItem, newProducts } from '../product-items';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Output() onRefreshPage: EventEmitter<any> = new EventEmitter();
  products: ProductItem[] = [];
  product: ProductItem | undefined;
  productRatingWidth: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));

    this.productService.getProducts().subscribe((products) => {
      this.product = products.find(
        (product) => product.id === productIdFromRoute
      );
      if (this.product)
        this.productRatingWidth = (this.product?.rating / 5) * 100;
    });
  }

  increaseLikes() {
    if (this.product) {
      this.product.likes += 1;
      this.productService.increaseLikes(this.product).subscribe();
    }
  }

  deleteProduct(product: ProductItem) {
    var conf = confirm(
      'Do you really want to delete this product permanently? '
    );
    if (conf == true) {
      if (product) {
        this.productService
          .deleteProduct(product)
          .subscribe(
            () =>
              (this.products = this.products.filter((p) => p.id !== product.id))
          );
      }
    }
  }
  addToCart(product: ProductItem) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
