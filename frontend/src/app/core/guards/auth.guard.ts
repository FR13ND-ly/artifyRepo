import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { AuthService } from '../data-access/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<unknown> {
  constructor(private authService : AuthService) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.getUserUpdateListener().pipe(
      filter((user : any) => user !== undefined),
      map((user : any) => !!user)
    )
  }
  
}
