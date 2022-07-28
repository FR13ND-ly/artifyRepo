import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../core/data-access/products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productsService : ProductsService) { }

  products$ : Observable<Product[]> = this.productsService.getProducts()

  ngOnInit(): void {
  }

}
