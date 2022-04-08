import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  formG = new FormGroup({});

  constructor(private empserv:EmployeeService,private router:Router,private formb:FormBuilder) { }
  // name!:string; email!:string; phone!:string; department!:string; 
  empData:any;


  ngOnInit(): void {
    this.formG = 
    this.formb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      // email:['',[Validators.required,Validators.email]],
      // email:['',[Validators.required,Validators.email,Validators.pattern('/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix')]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      department:['',[Validators.required]],
      phone:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  get valid_form(){
    return this.formG.controls;
  }

  addEmployee(){
    // this.empData = {name:this.name,email:this.email,phone:this.phone,department:this.department}
    this.empData = {name:this.formG.value.name,email:this.formG.value.email,phone:this.formG.value.phone,department:this.formG.value.department}

    this.empserv.storeEmployee(this.empData)
    .subscribe(res=>{
      if(res.success){
        alert('successfully added the employee')
        this.router.navigate(['/employees']);
      }
    })
  }

}
