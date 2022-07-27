import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductsComponent } from './user-products.component';
import { ProductModule } from '../core/components/product/product.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserProductsComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild([{
      path: '', component: UserProductsComponent
    }])
  ]
})
export class UserProductsModule { }
