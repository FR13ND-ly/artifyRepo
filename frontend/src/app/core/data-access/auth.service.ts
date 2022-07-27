import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, switchMap } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signInWithMetaMask() {
    let ethereum: any;
    return from(detectEthereumProvider()).pipe(
      switchMap(async (provider) => {
        ethereum = provider;
        return await ethereum.request({ method: 'eth_requestAccounts' });
      })
    )
  }
  
}
