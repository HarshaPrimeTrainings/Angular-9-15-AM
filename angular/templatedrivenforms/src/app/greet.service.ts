import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class GreetService {

  display(){  
    return 'Hi There ! Iam Service';
  }
}
