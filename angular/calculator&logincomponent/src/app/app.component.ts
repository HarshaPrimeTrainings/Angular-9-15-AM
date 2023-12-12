import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  res:any;

 add(no1:any,no2:any){
  this.res = Number(no1)+Number(no2);
 }

 sub(no1:any,no2:any){
  this.res = no1-no2;
 }


}
