import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl + "products/"

  exploreAll() {
    return this.http.get(`${this.apiUrl}all/`)
  }

  saved(token : string) {
    return <Observable<Product[]>>this.http.get(`${this.apiUrl}saved/${token}/`)
  }

  getUserProducts(token : string) {
    return <Observable<Product[]>>this.http.get(`${this.apiUrl}user-products/${token}/`)
  }

  exploreTop() {
    return this.http.get(`${this.apiUrl}top/`)
  }

  getSavedState(data : any) {
    return this.http.post(`${this.apiUrl}get-saved-state/`, data)
  }
  
  save(data : any) {
    return this.http.post(`${this.apiUrl}save/`, data)
  }

  add(data : any) {
    return this.http.post(`${this.apiUrl}add/`, data)
  }

  getProduct(id : number) {
    return this.http.get(`${this.apiUrl}${id}/`)
  }
  getProducts() {
    return <Observable<any>>this.http.get(`${this.apiUrl}products/`)
  }
}
