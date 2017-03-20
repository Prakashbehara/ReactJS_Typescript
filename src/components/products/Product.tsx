export class Product{
    id : number;
    category : string;
    price : string;
    stocked : boolean;
    name : String;

    constructor(id : number, category: string , price : string, stocked : boolean, name : String) {
        this.category = category;
        this.price = price;
        this.stocked = stocked;
        this.name = name;
    }


}