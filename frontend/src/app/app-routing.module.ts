import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, canDeactivate: [AuthGuard]},
  {path: 'explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule)},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'product/:id', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)},
  {path: 'saved', loadChildren: () => import('./saved/saved.module').then(m => m.SavedModule)},
  {path: 'my-products', loadChildren: () => import('./user-products/user-products.module').then(m => m.UserProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
