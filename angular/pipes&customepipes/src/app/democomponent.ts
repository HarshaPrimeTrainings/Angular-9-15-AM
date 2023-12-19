import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent{

    @Input()
    msg:any;

    @Output()
    testdata=new EventEmitter();


    getData(opvalue:any){
      this.testdata.emit(opvalue);
    }

}