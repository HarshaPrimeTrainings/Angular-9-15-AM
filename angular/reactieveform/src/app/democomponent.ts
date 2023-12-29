import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { GreetService } from "./greet.service";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent{

    greetmsg : any;
 constructor(private greet:GreetService){

 }

getMeaage(){
    this.greetmsg = this.greet.display();
}
}