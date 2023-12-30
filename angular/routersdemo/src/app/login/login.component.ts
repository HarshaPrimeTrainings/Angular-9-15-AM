import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private route:Router){

}

  validateUser(credetials:any){
    if(credetials.usr =='admin' && credetials.pwd=='1234'){
        this.route.navigate(['']);
        localStorage.setItem('isloggedin','true');
    }else{
      localStorage.setItem('isloggedin','false');
      alert('login faild');
    }

  }
}
