import { Demo } from "./demo";

class MyClass extends Demo{
   
somemethod(){
    console.log('Some method '+ this.username);
    this.sayHello();
    console.log( Demo.contact);
}

}
let m = new MyClass();
m.somemethod();
console.log(Demo.contact);
Demo.demomethod();