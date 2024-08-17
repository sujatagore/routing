import { Injectable } from '@angular/core';
import { FairsService } from './fairs.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IFair } from '../module/fairs.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsResolverService implements Resolve<IFair[]>{

  constructor(
    private _fairsservices : FairsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): IFair[] | Observable<IFair[]> | Promise<IFair[]> {
     return this._fairsservices.fetchAllFairs()
  }
}
