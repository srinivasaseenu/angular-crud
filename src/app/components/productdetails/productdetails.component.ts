import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private actr:ActivatedRoute,private proser:ProductService) { }
  product!:Product;
  product_id!:number;

  ngOnInit(): void {
    this.product_id = this.actr.snapshot.params['id'];
    this.proser.getProduct(this.product_id).subscribe(res=>{
      this.product = res.product_details;
      // alert(this.product);
    })

  }

}
