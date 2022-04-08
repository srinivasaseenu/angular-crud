import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { AscPipe } from './pipes/asc.pipe';
import { DescPipe } from './pipes/desc.pipe';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    TodoComponent,
    SearchPipe,
    AscPipe,
    DescPipe,
    ProductComponent,
    ProductdetailsComponent,
    AddproductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
