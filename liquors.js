class Liquor extends Drink{
    constructor(category, brand, name, netPrice, alcoholicLevel){
        super(category, brand, name, netPrice, alcoholicLevel);
        this.price = Math.ceil(this.netPrice + this.netPrice/100*30);
        this.quantity = 0;
    }
    
}