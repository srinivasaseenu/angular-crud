import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  pform = new FormGroup({});
  constructor(private fmb:FormBuilder, private proser:ProductService,private router:Router,private act:ActivatedRoute) { }
  pid!:number;
  ngOnInit(): void {

      this.pform = this.fmb.group({
        name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
        price:['',[Validators.required]],
        quantity:['',[Validators.required]],
        image:['',[Validators.required]],
        description:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      });
      this.pid = this.act.snapshot.params['id'];
      this.proser.getProduct(this.pid).subscribe(data=>{
        this.pform.patchValue({
          name:data.product_details.name,
          price:data.product_details.price,
          quantity:data.product_details.quantity,
          image:data.product_details.image,
          description:data.product_details.description,
        });
      })
    }

    get vform(){
      return this.pform.controls;
    }

    updatepro(){
      // console.log(this.pform.value);

      let pdata = {name:this.pform.value.name,quantity:this.pform.value.quantity,price:this.pform.value.price,image:this.pform.value.image,description:this.pform.value.description,};
      this.proser.updateProduct(this.pid,pdata).subscribe(res=>{
        if(res){
          alert('product added successfully');
          this.router.navigate(['/products']);
        }
      })
    }

}
