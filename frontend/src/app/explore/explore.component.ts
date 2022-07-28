import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../core/data-access/products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private productsService : ProductsService) { }
  
  products$ : Observable<any> = this.productsService.exploreAll()
  topRatedProducts$ : Observable<any> = this.productsService.exploreTop()

  ngOnInit(): void {
  }

}
