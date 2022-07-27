import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../core/components/product/product.module';

@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild([{
      path : '', component : ExploreComponent
    }])
  ]
})
export class ExploreModule { }
