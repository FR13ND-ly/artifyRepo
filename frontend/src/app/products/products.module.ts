import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../core/components/product/product.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild([{
      path: '', component: ProductsComponent
    }])
  ]
})
export class ProductsModule { }
