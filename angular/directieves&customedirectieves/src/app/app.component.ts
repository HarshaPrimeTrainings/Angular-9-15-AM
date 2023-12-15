import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

result:any;

age:number = 5;

topics = ['components','services','directievs','forms','routers'];

isEligble(item:any){
this.age = item;
}



}
