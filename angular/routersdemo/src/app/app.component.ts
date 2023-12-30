import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routerdemo';
  login:any = false;

constructor(private route:Router,private loginservice:LoginService){

}

ngOnInit(){
  this.login = this.loginservice.checkLogin();
  if(this.login!='true'){
    this.route.navigate(['login']);
  }else{
    this.route.navigate(['inbox']);
  }
}

ngDoCheck(){
  this.login = this.loginservice.checkLogin();
}
}
