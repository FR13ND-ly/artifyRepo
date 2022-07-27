import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { MaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: ProductDetailsComponent}
    ])
  ]
})
export class ProductDetailsModule { }
