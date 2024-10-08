import { Component, OnInit } from '@angular/core';
import { IFair } from '../../module/fairs.interface';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairsData !: Array<IFair>

  constructor(
    private _fairsservices : FairsService,
    private _routes : ActivatedRoute
  ) { 
    this._routes.data
      .subscribe(mataData =>{
        this.fairsData = mataData['fairsData']
      })
  }

  ngOnInit(): void {
    // this._fairsservices.fetchAllFairs()
    //   .subscribe((fair) =>{
    //     this.fairsData = fair
    //   })
  }

}
