import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOption = {
    headers:new HttpHeaders({
      'contentType':'application/json'
    })
  }


  constructor(private http:HttpClient) { }

  private API_URL:string = 'http://localhost:8000/api/employees';

  getEmployees():Observable<any>{
    return this.http.get(this.API_URL);
  }

  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }

  storeEmployee(data:Employee):Observable<any>{
    return this.http.post(this.API_URL,data,this.httpOption);
  }

  updateEmployee(id:number,data:Employee):Observable<any>{
    return this.http.put(`${this.API_URL}/${id}`,data,this.httpOption);
  }

  destroyEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
