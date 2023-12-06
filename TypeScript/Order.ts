import { Product } from "./Product";

class Order{

product:Product;
    constructor(prd:Product){
            this.product = prd;
    }
    getOrderDetaisl(){
        console.log(this.product.name + " placed succfully");
    }
}

let o = new Order(new Product(1,'BOOK',2,true));
o.getOrderDetaisl();