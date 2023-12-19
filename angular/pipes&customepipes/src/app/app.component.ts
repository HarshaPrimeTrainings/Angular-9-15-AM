import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

msg ='Hello All Wakeup its Monday';


result:any;

age:number = 5;

price = 0;

setPrice(val:any){
this.price = val;
}

topics = ['components','services','directievs','forms','routers'];

isEligble(item:any){
this.age = item;
}



}
