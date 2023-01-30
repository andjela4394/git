import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{

  productData: undefined | Product;

  constructor(private activeRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.api.getProductById(Number(productId)).subscribe((result)=>{
      console.warn(result);
      this.productData = result;
    })
  }

}
