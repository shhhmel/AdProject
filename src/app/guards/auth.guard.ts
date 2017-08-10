import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const users =  this.authorizationService.getUsers();

      for (let i = 0; i < users.length; i++) {
        if (users[i].logedIn) {
          return true;
        }
      }

      this.router.navigate(['/']);
      return false;
  }
}
