import { Component, Input, OnChanges } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges{
  @Input()
  login:any = false;

  constructor(private loginservice:LoginService){
  
  }

  ngOnChanges(){
    this.login = this.loginservice.checkLogin();
  }

  logout(){
    localStorage.setItem('isloggedin','false');
    window.location.reload();
  }
}
