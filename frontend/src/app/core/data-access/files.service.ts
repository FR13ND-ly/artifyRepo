import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filter } from 'vue/types/umd';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl + 'files/';

  addFile(data: any) {
    return this.http.post('https://api-eu1.tatum.io/v3/ipfs', data).pipe(
      tap((res : any) => console.log(res)),
      switchMap((res : any) => this.http.post(`${this.apiUrl}add/${res.ipfsHash}/`, data))
    )
  }


}
