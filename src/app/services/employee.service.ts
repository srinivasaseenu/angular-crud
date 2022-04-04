import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http:HttpClient) { }

  private API_URL:string = 'http://localhost:8000/api/employees';
  private API_URL1:string = 'http://localhost:8000/api/todos';

  getEmployees():Observable<any>{
    return this.http.get(this.API_URL);
  }

  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }

  storeEmployee(data:Employee):Observable<any>{
    return this.http.post(this.API_URL,data);
  }

  updateEmployee(id:number,data:Employee):Observable<any>{
    return this.http.put(`${this.API_URL}/${id}`,data);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
