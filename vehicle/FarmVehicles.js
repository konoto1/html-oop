import { MotorVehicle } from "./MotorVehicle.js";

export class FarmVehicles extends MotorVehicle {
    constructor(name) {
        super(name);
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
        return `${this.name}: has ${this.power} hp and ${this.cylinders} cylinder ${this.engineType} engine!! ${this.emoji.repeat(this.emojiCount)}`;
    }
};