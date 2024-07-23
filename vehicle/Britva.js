import { Motorcycle } from "./Motorcycle.js";

export class Britva extends Motorcycle {
    constructor(name) {
        super(name);
        this.power = 215;
        this.vehicleType = 'super-bike';
        this.cylinders = 4;
        this.emoji = '🏍';
        this.emojiCount = this.cylinders;
    }
}