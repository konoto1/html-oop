import { MotorVehicle } from "./MotorVehicle.js";

export class Automobile extends MotorVehicle {
    constructor(name) {
        super(name);
        this.vehicleType = '';
        this.power = 500;
        this.cylinders = 1;
        this.emoji = '🚗';
        this.emojiCount = 1;
    }

    intro() {
        return `This is a ${this.vehicleType} and it is called ${this.name}!`;
    }

    about() {
        return `${this.name}: has ${this.power} hp and ${this.cylinders} cylinder ${this.engineType} engine!! ${this.emoji.repeat(this.emojiCount)}`;
    }
};