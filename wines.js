class Wine extends Drink{
    constructor(category, brand, name, netPrice, alcoholicLevel, imbot, vitigno){
        super(category, brand, name, netPrice, alcoholicLevel);
        this.price = Math.ceil(this.netPrice + this.netPrice/100*22);
        this.imbot = imbot;
        this.vitigno = vitigno;
        this.quantity = 0;
    }
    
}