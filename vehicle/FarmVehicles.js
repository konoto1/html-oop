export class FarmVehicles {
    constructor(name) {
        this.name = name;
        this.vehicleType = '';
        this.power = 100;
        this.wheels = 4;
        this.cylinders = 6;
        this.emoji = '🚜';
        this.emojiCount = 1;
    }

    intro() {
        return `This is a ${this.vehicleType} and it is called ${this.name}!`;
    }

    about() {
        return `${this.name}: has ${this.power} hp and ${this.cylinders} cylinder engine!! ${this.emoji.repeat(this.emojiCount)}`;
    }
};