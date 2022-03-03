class cars {
    constructor(model, year, power, color){
        this.model = model;
        this.year = year;
        this.power = power;
        this.color = color;
    }
    
    showInfo() {
        return `
        Model ${this.model};
        Year ${this.year};
        Engine ${this.power};
        Color ${this.color}`;        
    }
}

class ElectroCars extends cars {
    constructor(model,  year, power, color, battery) {
        super(model,  year, power, color);
        this.battery = battery;
    };

    promote() { 
        return `Hello! We have a latest, newest cars from overworld!`
    };
}
const toyota = new cars("toyota", "2020", "2,5", "white");

const electroCars = new ElectroCars("nissan", "2021", "2,0", "red", "10");


console.log(toyota.showInfo());
console.log(electroCars.promote());
console.log(electroCars.showInfo());
