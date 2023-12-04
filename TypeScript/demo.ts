class Demo{

username:string = 'vivek';

    greet(){
        console.log('Iam Greet Method');
        console.log('Good Morning '+this.username);
    }
     
    sayHello(username){
       let section = 'ECE';
        console.log('Good Morning '+this.username + " belongs "+ section);
        console.log('Good Morning '+username);
    }

}

let d = new Demo();

console.log(d.username);
d.greet();
d.sayHello('Anand');
