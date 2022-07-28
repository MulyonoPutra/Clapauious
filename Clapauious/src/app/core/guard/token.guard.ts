import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { MessagesService } from '../service/messages.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private tokenService: AuthService, private router: Router, private messages: MessagesService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!this.tokenService.loadToken()) {
        this.messages.error('You cannot access this page, please login first!', 4000);
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }, replaceUrl: true});
        return false;
      }
      return true;
  }

}
