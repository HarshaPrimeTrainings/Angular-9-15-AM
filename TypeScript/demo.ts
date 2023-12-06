export class Demo{

public username:string = 'vivek';

protected address:string = 'Hyd';

private pin: number = 112233;

static contact= 999999999;

static demomethod(){
    console.log('Static Method');
}

protected sayHello(){
    console.log('From Say Hello');
}

private withdraw(){
    console.log('Some amount withdrawn');
}

public  greet(){
        console.log('Hello Iam Greet Method');
        console.log('addr '+ this.address);
        this.sayHello();
        console.log('PIN '+ this.pin);
        this.withdraw();
    }

}

console.log(Demo.contact);
Demo.demomethod();