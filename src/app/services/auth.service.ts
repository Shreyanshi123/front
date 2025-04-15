import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL ="https://localhost:7288";
  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(`${this.API_URL}/api/Registration`,data);
  }
  signIn(data:any){
    return this.http.post(`${this.API_URL}/api/Login`,data);
  }
}
