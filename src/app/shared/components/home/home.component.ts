import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  gotoProducts(){
    //API fetch call for products data
    // then redirect the products

    this._router.navigate(['products'])
  }
}
