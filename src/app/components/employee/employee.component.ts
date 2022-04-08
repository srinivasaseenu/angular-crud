import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empserv:EmployeeService) { }
  empList:any[]=[];

  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList(){
    this.empserv.getEmployees()
    .subscribe(res=>{
      this.empList = res.employee_list;
      // console.log(this.empList);
    })
  }

  deleteEmp(id:number){
    if(confirm('Do you want to delete this employee?')){
      this.empserv.destroyEmployee(id)
      .subscribe(res=>{
        if(res.success){
          alert('employee deleted');
        }
        this.getEmpList();
      })
    }
  }

}
