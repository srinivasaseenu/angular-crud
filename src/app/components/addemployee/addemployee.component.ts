import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private empserv:EmployeeService,private router:Router) { }
  name!:string; email!:string; phone!:string; department!:string; empData:any;

  ngOnInit(): void {
  }

  addEmployee(){
    this.empData = {name:this.name,email:this.email,phone:this.phone,department:this.department}

    this.empserv.storeEmployee(this.empData)
    .subscribe(res=>{
      if(res.success){
        alert('successfully added the employee')
        this.router.navigate(['/employees']);
      }
    })
  }

}
