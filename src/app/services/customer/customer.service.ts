import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = "http://localhost:3000/api/v1/customers/"
 
  
  constructor(private readonly http:HttpClient) { }
  
  getCustomers():Observable<Customer[]>{
   return this.http.get<Customer[]>(this.API)
  }
  
  addCustomer(name:string):Observable<Customer>{
   const body = {name}
   return this.http.post<Customer>(this.API,body)
  }

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(`${this.API}${id}`)
  }

  editCustomer(id:number,name:string):Observable<Customer>{
    const body = {name}
    return this.http.put<Customer>(`${this.API}${id}`,body)
  }
  
}
