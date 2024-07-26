import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../module/products.interface';
import { ActivatedRoute } from '@angular/router';

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
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.productsData = this._productsService.fetchAllProducts()
  }

}
