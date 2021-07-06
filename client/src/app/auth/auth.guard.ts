import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return true;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('token') != null) {
      console.log('rolmatch canactive from ');
      let roles = route.data['permittedRoles'] as Array<string>;
      if (roles) {
        if (this.userService.roleMatch(roles)) return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
