import { FarmVehicles } from "./FarmVehicles.js";

export class Harvester extends FarmVehicles {
    constructor(name) {
        super(name);
        this.power = 690;
        this.vehicleType = 'harvester';
        this.wheels = 'tracks';
        this.emoji += '🎑';
        this.emojiCount = this.cylinders;
    }
}