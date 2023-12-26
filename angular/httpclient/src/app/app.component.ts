import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  users:any;

  msg:any;

 constructor(private greet:GreetService,private usersservice:UserService){

 }

ngOnInit(){
  this.msg = this.greet.display();
  this.usersservice.getUsers().subscribe(data => this.users = data);
}

displayUsers(){

}


}
