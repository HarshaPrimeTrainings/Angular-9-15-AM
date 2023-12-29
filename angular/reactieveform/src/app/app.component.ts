import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { UserService } from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  myreactform:FormGroup;
  constructor(){
    this.myreactform = new FormGroup({});
  }
  

  ngOnInit(){
    this.myreactform = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'pwd':new FormControl(null),
      'ctct':new FormControl(null),
      'email':new FormControl(null,[Validators.maxLength(10),Validators.email])
    });
  }

  submitData(){
    console.log(this.myreactform);
  }
}
