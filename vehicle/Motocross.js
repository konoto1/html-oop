import { Motorcycle } from "./Motorcycle.js";

export class Motocross extends Motorcycle {
    constructor(name) {
        super(name);
        this.power = 56;
        this.vehicleType = 'motocross bike';
        this.cylinders = 1;
        this.emoji = '🚴';
        this.emojiCount = this.cylinders;
    }
}