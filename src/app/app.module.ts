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
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { AscPipe } from './pipes/asc.pipe';
import { DescPipe } from './pipes/desc.pipe';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
