import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, Observable, switchMap, tap } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl + "profiles/"
  userUpdated : BehaviorSubject<any> = new BehaviorSubject(undefined)

  public init() {
    let ethereum: any;
    return from(detectEthereumProvider()).pipe(
      switchMap(async (provider) => {
        ethereum = provider;
        if (!ethereum) alert("You need Metamask Extension")
        return await ethereum.request({ method: 'eth_requestAccounts' });
      }),
      switchMap((res : any) : Observable<any> => {
        return this.http.get(`${this.apiUrl}login/${res[0]}/`).pipe(
          tap((res) => this.userUpdated.next(res))
        )
      }) 
    )
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable().pipe(
      filter((res : any) => res !== undefined)
    )
  }

  updateUsername(data : any) {
    return this.http.post(`${this.apiUrl}update-username/`, data)
  }
  
}
