import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../module/products.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData !: Array<Iproducts>
  productId !: string

  constructor(
    private _productsService : ProductsService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) { 
    this._routes.data
        .subscribe(metaData =>{
            this.productsData = metaData['productsData'];
            console.log(metaData);
            this._router.navigate(['products', this.productsData[0].pid],{
              //queryParams : {canReturn : this.productsData[0].canReturn, test: 'test'},
              queryParams : {canReturn : this.productsData[0].canReturn},
              queryParamsHandling : 'merge'
            })
        })
  }

  ngOnInit(): void {
      // this.productsData = this._productsService.fetchAllProducts();

      // this._router.navigate(['products', this.productsData[0].pid],{
      //   //queryParams : {canReturn : this.productsData[0].canReturn, test: 'test'},
      //   queryParams : {canReturn : this.productsData[0].canReturn},
      //   queryParamsHandling : 'merge'
      // })
  }

}


// we can add multiple queryParams