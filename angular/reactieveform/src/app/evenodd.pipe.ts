import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenodd',
  pure:true
})
export class EvenoddPipe implements PipeTransform {

  count = 1;
  transform(value: any) {
    console.log('---- Executed -----'+  this.count);
    this.count++;
   if(value%2==0){
    return value + ' is Even Number';
   }
   return value+ ' is Odd Number'

  }

}
