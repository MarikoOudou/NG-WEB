import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private rooter: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // let role = this.currentUser.roles[0].role.toLowerCase()


     const user: any = JSON.parse(localStorage.getItem('user_profil'));
     console.log("auth", user)

     if (user) {
       // this.rooter.navigate(['pages']);
       console.log("auth")
       return true;

     } else {
      return false;

     }
  }
/*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(async (res, rej) => {

      const user: any = JSON.parse(localStorage.getItem('user_profil'));
      console.log("auth", user)

      if (user) {
        res(true);
        // this.rooter.navigate(['pages']);
        console.log("auth")
      } else {
        res(false);
      }

    });
  }*/


}
