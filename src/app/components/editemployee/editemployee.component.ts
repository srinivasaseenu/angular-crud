import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private empserv:EmployeeService, private actroute:ActivatedRoute, private route:Router) { }
  id!:number; name!:string; email!:string; phone!:string; department!:string; empData:any;

  ngOnInit(): void {

    this.id = this.actroute.snapshot.params['id'];

    this.empserv.getEmployee(this.id)
    .subscribe(res=>{
      // console.log(res);
      if(res.success){
        this.name = res.employee_details.name;
        this.email = res.employee_details.email;
        this.phone = res.employee_details.phone;
        this.department = res.employee_details.department;
      }
    })
  }

  updateEmployee(){
    this.empData = {name:this.name,email:this.email,phone:this.phone,department:this.department};
    this.empserv.updateEmployee(this.id, this.empData)
    .subscribe(res=>{
      if(res.success){
        alert('successfully updated the user data');
        this.route.navigate(['/employees']);
      }
    })
  }

}
