import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  show = true;

childinput:any;

ngOnInit(){
  console.log('--- Hello Iam From ngOnit ---');
}

setMessage(val:any){
this.childinput = val;
}

display(){
  this.show = !this.show;
}

}
