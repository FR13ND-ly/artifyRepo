import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../core/data-access/auth.service';
import { ProductsService } from '../core/data-access/products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {

  constructor(private authService : AuthService, private productService : ProductsService) { }

  products$ : Observable<Product[]> = this.authService.getUserUpdateListener().pipe(
    switchMap((user : any) => this.productService.getUserProducts(user.token))
  )

  ngOnInit(): void {
  }

}
