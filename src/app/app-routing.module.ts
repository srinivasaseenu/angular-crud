import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path:'',component:TodoComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'employees/create',component:AddemployeeComponent},
  {path:'employees/:id/edit',component:EditemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
