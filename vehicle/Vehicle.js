import { Automobile } from "./Automobile.js";

export class Vehicle extends Automobile {
    constructor(name) {
        super(name);
        this.vehicleType = 'super-car';
        this.cylinders = 12;
        this.emoji = '🏎';
        this.emojiCount = this.cylinders;
    }
}