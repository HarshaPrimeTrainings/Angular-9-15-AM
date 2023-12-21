import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

greet:string='';

  validate(username:any,password:any){
    if(username.value == 'admin' && password.value == '1234'){
        this.greet = 'Welcome to Angular';
    }else{
      this.greet = 'Login Denined check credentials';
    }

  }
}
