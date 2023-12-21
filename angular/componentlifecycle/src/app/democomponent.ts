import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent implements OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  @Input()
  msg:any;

   ngOnDestroy(){
    console.log('-- NgOnDestroy ----');
   }

   ngOnChanges(simple:SimpleChanges){
    console.log('--- ngOnChanges ---');
        console.log(simple);
   }

   ngDoCheck(){
      console.log('------Do Check -----');
   }

ngAfterContentInit(){
  console.log('------ngAfterContentInit -----');
}
ngAfterContentChecked(){
console.log('-- ngAfterContentChecked --');
}

ngAfterViewInit(){
console.log( '--- ngAfterViewInit -- ' );
}
ngAfterViewChecked(){
console.log('-- ngAfterViewChecked -- ')
}
}