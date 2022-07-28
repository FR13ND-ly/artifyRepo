import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http : HttpClient) { }

  apiUrl = environment.apiUrl + "likes/"

  getLikes(data : any) {
    return this.http.post(`${this.apiUrl}get/`, data)
  }

  like(data : any) {
    return this.http.post(`${this.apiUrl}like/`, data)
  }
}
