import { Bird } from "./Bird.js";

export class Crane extends Bird {
    constructor(name) {
        super(name);
        this.legsCount = 2;
        this.animalType = 'crane';
        this.sound = 'rattle';
        this.emoji = '🦩'
        this.emojiCount = 9;
    };
}