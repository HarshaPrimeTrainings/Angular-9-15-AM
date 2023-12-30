import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLogin(){
      return localStorage.getItem('isloggedin');
  }
}
