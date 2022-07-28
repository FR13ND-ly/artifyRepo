import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../core/data-access/auth.service';
import { ProductsService } from '../core/data-access/products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(private productService : ProductsService, private authService : AuthService) { }

  products$ : Observable<Product[]> = this.authService.getUserUpdateListener().pipe(
    switchMap((user : any) => this.productService.saved(user.token))
  )
  
  ngOnInit(): void {
  }

}
