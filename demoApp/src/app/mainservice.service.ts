import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class MainserviceService {
  public studId!:string;
  public min:any
  public fine:any
  url:string='http://54.245.54.201:8080'
  // url:string='http://localhost:8080'

  constructor(private http:HttpClient, private router:Router ) { }
  LoginUser(email:string,password:string):Observable<any>{
    console.log("inside login user")
    return this.http.post<any>(`${this.url}/users/login`,{email,password})
}
RegUser(email:string,password:string):Observable<any>{
  return this.http.post<any>(`${this.url}/users/register`,{email,password})
}
postVerifyStud(SID:any):Observable<any>{
  return this.http.post<any>(`${this.url}/verify`,{SID})
}
postStud(SID:any):Observable<any>{
  return this.http.post<any>(`${this.url}/stud`,{SID})
}
getStud():Observable<any>{
  return this.http.get<any>(`${this.url}/show`)
}
getOneStud(id:string):Observable<any>{
  return this.http.get<any>(`${this.url}/studs/${id}`)
}
getOneStudMain(id:string):Observable<any>{
  return this.http.get<any>(`${this.url}/student/${id}`)
}
getCheckout(id:string):Observable<any>{
  return this.http.get<any>(`${this.url}/check/${id}`)
}
getCheckoutp(id:string,checkout:any,min:any,fine:any):Observable<any>{
  return this.http.patch<any>(`${this.url}/check/${id}`,{checkout,min,fine})
}
getUpdate(id:string):Observable<any>{
  return this.http.get<any>(`${this.url}/display/${id}`)
}
getOut():Observable<any>{
  return this.http.get<any>(`${this.url}/out`)
}
}