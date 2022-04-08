import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL:any = 'http://localhost:8000/api/products/';
  httpOption = {
    headers : new HttpHeaders({
      'contentType':'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  getProducts():Observable<any>{
    return this.http.get(this.API_URL);
  }


  getProduct(id:any):Observable<any>{
    return this.http.get(`${this.API_URL}${id}`);
  }

  storeProduct(data:Product):Observable<any>{
    return this.http.post(this.API_URL,data,this.httpOption);
  }

  updateProduct(id:any,data:Product):Observable<any>{
    return this.http.put(`${this.API_URL}${id}`,data,this.httpOption);
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.API_URL}${id}`);
  }



  /** RxJS subject */

  public subject = new Subject<any>();

  setcartid(pid:any){
    this.subject.next(pid);
  }

  getcartid():Observable<any>{
    return this.subject.asObservable();
  }
}
