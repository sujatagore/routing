import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iusers } from '../module/users.interface';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve <Iusers[]>{

  constructor(
    private _usersService : UsersService
  ) { }

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Iusers[] | Observable<Iusers[]> | Promise<Iusers[]> {

        // Resolve is going to fetch data of Iusers
        return this._usersService.fetchAllUsers()
  }
}
