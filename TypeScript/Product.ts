export class Product{
    pid:number;
    name:string;
    price:number;
    isStock:boolean;

    constructor(pid:number,pname:string,price:number,avilable:boolean){
            this.pid = pid;
            this.name = pname;
            this.price = price;
            this.isStock = avilable;
    }

    getProductDetails(){
        console.log(this.name+ '::'+this.price + '::'+this.isStock);
    }

}
