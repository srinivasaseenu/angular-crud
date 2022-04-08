import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path:'',component:TodoComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'employees/create',component:AddemployeeComponent},
  {path:'employees/:id/edit',component:EditemployeeComponent},
  {path:'products',component:ProductComponent},
  {path:'products/create',component:AddproductComponent},
  {path:'products/:id/product-details',component:ProductdetailsComponent},
  {path:'products/:id/edit',component:EditproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
