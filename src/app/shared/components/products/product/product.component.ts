import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/module/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId !: string;
  productObj !: Iproducts;

  constructor(
    private _routes : ActivatedRoute,
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.productParams()
  }

  onProductRemove(){
    if (this.productId) {
      this._productsService.removeProduct(this.productId)
    }
  }

  productParams(){
    this._routes.params
      .subscribe((params:Params) =>{
        this.productId = params['productId']
        if (this.productId) {
            this.productObj = this._productsService.getProductDetails(this.productId);
            console.log(this.productObj)
          }
      })

    // console.log(this._routes.snapshot.params['productId'])
    // this.productId = this._routes.snapshot.params['productId'];
    // if (this.productId) {
    //   this.productObj = this._productsService.getProductDetails(this.productId)
    // }

  }

}
