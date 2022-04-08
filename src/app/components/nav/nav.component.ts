import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartListCount:any = 0;
  tempvar:any;
  constructor(private proser:ProductService) { }

  ngOnInit(): void {


      /** RxJS subject for cartlist count */

      if(localStorage.getItem('cartList') != undefined){
          this.tempvar = localStorage.getItem("cartList");
          this.tempvar = JSON.parse(this.tempvar);
        if(Array.isArray(this.tempvar)){
          this.cartListCount = this.tempvar.length;
        }
      }

      this.proser.getcartid().subscribe(list=>{
        list = JSON.parse(list);
        // this.cartListCount = list.length;
        if(Array.isArray(list)){
          this.cartListCount = list.length;
        }
      })
  }

}
