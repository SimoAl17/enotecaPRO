class Beer extends Drink{
    constructor(category, brand, name, netPrice, alcoholicLevel, beerType){
        super(category, brand, name, netPrice, alcoholicLevel);
        this.price = Math.ceil(this.netPrice + this.netPrice/100*22);
        this.beerType = beerType;
        this.quantity = 0;
    }
    
}