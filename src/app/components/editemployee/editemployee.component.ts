import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  formG = new FormGroup({});
  constructor(private empserv:EmployeeService, private actroute:ActivatedRoute, private route:Router, private formb:FormBuilder) { }
  id!:number; name!:string; email!:string; phone!:string; department!:string; empData:any;

  ngOnInit(): void {

    /* ** form validation ** */
    this.formG = this.formb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      department:['',[Validators.required]]

    });


    this.id = this.actroute.snapshot.params['id'];

    this.empserv.getEmployee(this.id)
    .subscribe(res=>{
      // console.log(res);
      if(res.success){

        this.formG.patchValue({
          name : res.employee_details.name,
          email : res.employee_details.email,
          phone : res.employee_details.phone,
          department : res.employee_details.department,
        })
        
      }
    })
  }

  get valid_form(){
    return this.formG.controls;
  }

  updateEmployee(){
    // this.empData = this.formG.value;
    // this.empData = {name:this.name,email:this.email,phone:this.phone,department:this.department};
    this.empData = {name:this.formG.value.name,email:this.formG.value.email,phone:this.formG.value.phone,department:this.formG.value.department};
      console.log(this.empData);
    this.empserv.updateEmployee(this.id, this.empData)
    .subscribe(res=>{
      if(res.success){
        alert('successfully updated the user data');
        this.route.navigate(['/employees']);
      }
    })
  }

}
