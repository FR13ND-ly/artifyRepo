import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports : [
    MaterialModule,
    CommonModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
