import { Motorcycle } from "./Motorcycle.js";

export class Harley extends Motorcycle {
    constructor(name) {
        super(name);
        this.vehicleType = 'chooper';
        this.cylinders = 2;
        this.emoji = '💪';
        this.emojiCount = this.cylinders;
    }
}