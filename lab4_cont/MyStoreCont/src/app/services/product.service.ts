import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../product-items';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.apiUrl);
  }

  deleteProduct(product: ProductItem): Observable<ProductItem> {
    return this.http.delete<ProductItem>(this.apiUrl + '/' + product.id);
  }

  increaseLikes(product: ProductItem): Observable<ProductItem> {
    return this.http.put<ProductItem>(this.apiUrl + '/' + product.id, {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      rating: product.rating,
      image: product.image,
      link: product.link,
      category: product.category,
      likes: product.likes,
    });
  }
}
