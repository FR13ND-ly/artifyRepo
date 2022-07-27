import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedComponent } from './saved.component';
import { ProductModule } from '../core/components/product/product.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SavedComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild([{
      path: '', component: SavedComponent
    }])
  ]
})
export class SavedModule { }
