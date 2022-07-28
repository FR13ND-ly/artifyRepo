import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { AuthService } from '../core/data-access/auth.service';
import { LikesService } from '../core/data-access/likes.service';
import { ProductsService } from '../core/data-access/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService : ProductsService, private route : ActivatedRoute, private authService : AuthService, private likesService : LikesService) { }

  product$ : Observable<any> = this.route.params.pipe(
    switchMap((res : any) => this.productService.getProduct(res['id']))
  )
  id! : number
  user! : string

  likes$ : Observable<any> = this.route.params.pipe(
    tap((res : any) => this.id = res['id']),
    switchMap((res : any) => this.authService.getUserUpdateListener().pipe(
      tap((user : any) => this.user = user.token),
        switchMap((user) => this.likesService.getLikes({
          product : res['id'],
          user : user.token
        })
      )
    ))
  )

  savedState$ : Observable<any> = this.route.params.pipe(
    switchMap((res : any) => this.authService.getUserUpdateListener().pipe(
      switchMap((user) => this.productService.getSavedState({
        product : res['id'],
        user : user.token
      })
    )
    ))
  )

  ngOnInit(): void {
  }

  onSave(vm : any) {
    vm.savedState = !vm.savedState
    this.productService.save({
      product : this.id,
      user : this.user
    }).subscribe()
  }

  onLike(likesInfo : any) {
    likesInfo.liked = likesInfo.liked == 'favorite' ? 'favorite_border' : 'favorite'
    likesInfo.likes += likesInfo.liked == 'favorite' ? 1 : -1
    this.likesService.like({
      product : this.id,
      user : this.user
    }).subscribe()
  }

}
