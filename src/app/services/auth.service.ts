import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  
  constructor(private router: Router, private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('token');

  }
  logged(){
    let token = localStorage.getItem('token');
    return token !== null ? true : false;
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
  login(user: any){
    return this.http.post('https://back-tienda-ropa.vercel.app/users/login',user)
  }
  register(user : any){
    return this.http.post('https://back-tienda-ropa.vercel.app/users/register/', user)
  }
  

}
