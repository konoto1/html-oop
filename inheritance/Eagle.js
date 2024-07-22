import { Bird } from "./Bird.js";

export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.legsCount = 2;
        this.animalType = 'eagle';
        this.sound = 'SCREEEE';
        this.emoji = '🦅';
        this.emojiCount = 5;
    };
}