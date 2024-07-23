import { FarmVehicles } from "./FarmVehicles.js";

export class Loader extends FarmVehicles {
    constructor(name) {
        super(name);
        this.power = 228;
        this.vehicleType = 'loader';
        this.emoji = '🚂';
        this.emojiCount = this.cylinders;
    }
}