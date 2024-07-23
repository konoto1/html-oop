import { Automobile } from "./Automobile.js";

export class Truck extends Automobile {
    constructor(name) {
        super(name);
        this.vehicleType = 'truck';
        this.power = 605;
        this.cylinders = 6;
        this.emoji = '🚚';
        this.emojiCount = this.cylinders;
    }
}