import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  msg:any;

 constructor(private greet:GreetService){

 }

ngOnInit(){
  this.msg = this.greet.display();
}


}
