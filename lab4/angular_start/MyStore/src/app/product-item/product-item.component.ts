import { Component, OnInit } from '@angular/core';
import { ProductItem, newProducts } from '../product-items';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product: ProductItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = newProducts.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: ProductItem) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  share() {
    window.alert('The product has been shared!');
  }
}
