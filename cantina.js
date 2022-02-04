class Cantina{
    constructor(){
        this.beers = [];
        this.wines = [];
        this.liquors = [];
    }

    generateCode(product){
        const now = product.insertionDate;
        let code = product.category[0] + "-" + product.brand + "-" + product.name + "-" + now.getFullYear() + "-" + (now.getMonth()+ 1) + "-" + (now.getDate() + 1)/* + "-" + now.getMilliseconds()*/;
        return code;
    }

    

    checkIfInCatalogue(product){
        let inCatalogue = false;
        for (const element of this.beers) {
            if (element.code === product.code) {
                inCatalogue = true;
            }
        }
        for (const element of this.wines) {
            if (element.code === product.code) {
                inCatalogue = true;
            }
        }
        for (const element of this.liquors) {
            if (element.code === product.code) {
                inCatalogue = true;
            }
        }
        return inCatalogue;
    }

    addProduct(product){
        product.insertionDate = new Date();
        product.code = this.generateCode(product);
        if (cantina.checkIfInCatalogue(product) === false) {
            if (product.category === "Beer") {
                this.beers.push(product);
            } else if (product.category === "Wine") {
                this.wines.push(product);
            } else {
                this.liquors.push(product);
            }    
        }
    }
    
    winePrice (product){
        let oggi = new Date();
            let anniImbot = oggi.getFullYear() - product.imbot;
            let newPrice = product.price;
            for (let i = 0; i <= anniImbot; i++) {
                newPrice = newPrice + newPrice/100;    
            }
        return Math.ceil(newPrice);
    }
    
    toString(product){
        let etichetta = "Categoria: " + product.category +
                        "\nMarca: " + product.brand +
                        "\nNome: " + product.name +
                        "\nGrad. Alcolica: " + product.alcoholicLevel + "%";
        if (product.category === "Wine") {
            product.price = cantina.winePrice(product);
            etichetta += "\nPrezzo (IVA incl.): " + product.price +
                         "\nAnno Imbottigliamento: " + product.imbot +
                         "\nVitigno: " + product.vitigno;
        } else if (product.category === "Beer") {
            etichetta += "\nPrezzo (IVA incl.): " + product.price +
                         "\nTipologia Birra: " + product.beerType;
        } else {
            "\nPrezzo (IVA incl.): " + product.price;
        }
        etichetta += "\nIn catalogo dal: " + product.insertionDate;
        return etichetta;
    }

    searchProduct(type, param){
        let result;
        switch (type) {
            case "Nome":
                for (const element of this.wines) {
                    if (param === element.name) {
                        result = element;
                        break;
                    }
                }
                for (const element of this.beers) {
                    if (param === element.name) {
                        result = element;
                        break;
                    }
                }
                for (const element of this.liquors) {
                    if (param === element.name) {
                        result = element;
                        break;
                    }
                }
                break;

            case "Codice":
                for (const element of this.wines) {
                    if (param === element.code) {
                        result = element;
                        break;
                    }
                }
                for (const element of this.beers) {
                    if (param === element.code) {
                        result = element;
                        break;
                    }
                }
                for (const element of this.liquors) {
                    if (param === element.code) {
                        result = element;
                        break;
                    }
                }
                break;
                
            default:
                result = "Errore. Tipo non riconosciuto"
                break;
        }
        if (result === undefined) {
            result = "Errore. Bevanda non riconosciuta."
        }
        return result;
    }

    searchByVine(vine){
        let results = [];
        for (const element of this.wines) {
            if (vine === element.vitigno) {
                results.push(element);
            }
        }
        return results;
    }

    addSubBottles(code, bottles){
        let target = cantina.searchProduct("Codice", code)
        target.quantity += bottles;
    }

    checkQuantity(code){
        let bottles = cantina.searchProduct("Codice", code).quantity;
        return bottles;
    }

    checkStorage(){
        let beersNumber = 0;
        let winesNumber = 0;
        let liquorsNumber = 0;
        for (const element of this.beers) {
            beersNumber += element.quantity;
        }
        for (const element of this.wines) {
            winesNumber += element.quantity;
        }
        for (const element of this.liquors) {
            liquorsNumber += element.quantity;
        }
        console.log("Numero birre:", beersNumber, "\nNumero vini:", winesNumber, "\nNumero superalcolici:", liquorsNumber);
    }

    checkQuantityByVine(vine){
        let vinvin = this.searchByVine(vine);
        let quant = 0;
        for (const wine of vinvin) {
            quant+= wine.quantity;
        }
        return quant;
    }

    checkQuantityByYear(year){
        let vinvin = [];
        for (const element of this.wines) {
            if (year === element.imbot) {
                vinvin.push(element);
            }
        }
        let quant = 0;
        for (const wine of vinvin) {
            quant+= wine.quantity;
        }
        return quant;
    }

    checkQuantityByBeerType(type){
        let vinvin = [];
        for (const element of this.beers) {
            if (type === element.beerType) {
                vinvin.push(element);
            }
        }
        let quant = 0;
        for (const beer of vinvin) {
            quant+= beer.quantity;
        }
        return quant;
    }
}