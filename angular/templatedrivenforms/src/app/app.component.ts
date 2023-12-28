import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {

  
getdetails(details:any){
  console.log(details);
  console.log(details.status);
  console.log(details.value);
}

}
