import { Bird } from "./Bird.js";

export class Pigeon extends Bird {
    constructor(name) {
        super(name);
        this.legsCount = 2;
        this.animalType = 'pigeon';
        this.sound = 'whisle';
        this.emojiCount = 7;
    };
}