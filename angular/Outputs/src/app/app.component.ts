import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

result:any;

op:any;

getValue(item:any){
this.result = item;
}

getsomething(val:any){
  this.op = val;
}


}
