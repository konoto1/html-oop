import { FarmVehicles } from "./FarmVehicles.js";

export class Tractor extends FarmVehicles {
    constructor(name) {
        super(name);
        this.power = 443;
        this.vehicleType = 'tractor';
        this.wheels = 8;
        this.emojiCount = this.cylinders;
    }
}