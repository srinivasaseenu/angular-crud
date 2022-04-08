import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private proserv:ProductService) { }
  productList:any[]=[];
  temparr:any=[];

  ngOnInit(): void {
    this.productalllist();
    
  }
  productalllist(){
    this.proserv.getProducts().subscribe(data=>{
      this.productList = data.product_list;
    })
  }

  deletepro(pid:any){
    if(confirm('Are you sure! do you want to delete this product')){
        this.proserv.deleteProduct(pid).subscribe(res=>{
          if(res){
            alert('product deleted successfully');
            this.productalllist();
          }
        });
    }
  }



  // for RxJS subject and show cart count
  addtocart(pid:any){
    if(pid){
      this.temparr = [];
      if(localStorage.getItem('cartList') != undefined){
          this.temparr = localStorage.getItem("cartList");
          this.temparr = JSON.parse(this.temparr);
        if(!Array.isArray(this.temparr)){
          this.temparr = [];
        }
      }
      // console.log(this.temparr);
      // alert(this.temparr.length);

      if(!this.temparr.includes(pid)){
        this.temparr.push(pid);
        alert('successfully added to cart');
      }else{
        alert('already product exist in cart');
      }

      this.proserv.setcartid(JSON.stringify(this.temparr));
      localStorage.setItem('cartList',JSON.stringify(this.temparr));
    }
  }

}
