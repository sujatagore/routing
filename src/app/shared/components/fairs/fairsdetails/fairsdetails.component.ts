import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IFair } from 'src/app/shared/module/fairs.interface';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fairsdetails',
  templateUrl: './fairsdetails.component.html',
  styleUrls: ['./fairsdetails.component.scss']
})
export class FairsdetailsComponent implements OnInit {

  fairId !: string;
  fairInfo !: IFair;

  constructor(
    private _routes : ActivatedRoute,
    private _fairsService : FairsService
  ) { }

  ngOnInit(): void {
    this._routes.params
      .subscribe((param : Params) =>{
        this.fairId = param['fairId'];
        //API call to get fair details >> if we have fairId
        if (this.fairId) {
          //API call
          this._fairsService.getFairinfo(this.fairId)
              .subscribe(res =>{
                this.fairInfo = res!;
              })
        }
      })
  }

}
