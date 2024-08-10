import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  staticDataMsgRouting !: string

  constructor(
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.staticDataMsgRouting = this._routes.snapshot.data['msg']
  }

}
