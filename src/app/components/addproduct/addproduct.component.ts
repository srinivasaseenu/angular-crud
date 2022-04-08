import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  pform = new FormGroup({});
  constructor(private fmb:FormBuilder,private proser:ProductService,private router:Router) { }

  ngOnInit(): void {

    this.pform = this.fmb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      price:['',[Validators.required]],
      quantity:['',[Validators.required]],
      image:['',[Validators.required]],
      description:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    });
  }

  get vform(){
    return this.pform.controls;
  }

  addpro(){
    // console.log(this.pform.value);

    let pdata = {name:this.pform.value.name,quantity:this.pform.value.quantity,price:this.pform.value.price,image:this.pform.value.image,description:this.pform.value.description,};
    this.proser.storeProduct(pdata).subscribe(res=>{
      if(res){
        alert('product added successfully');
        this.router.navigate(['/products']);
      }
    })

  
  }

}
