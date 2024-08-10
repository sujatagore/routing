import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    //GET actual login userRole from local storage

    let actualLogInuserRole = localStorage.getItem('userRole') as string;
    let userRoleArr : Array<string> = route.data['userRole']
    console.log(actualLogInuserRole);
    //Info of the userRoleArr from static data  
    console.log(userRoleArr)

    if (userRoleArr.includes(actualLogInuserRole)) {
      return true;
    } else {
      // return this._router.navigate(['home']) sometimes navigate not work so we can use-

      return this._router.createUrlTree(['home']) // Instead of this if we return false we can not get navigate to another pages
                                                  // we can remain on same page
    }
    
    
  }
  
}
