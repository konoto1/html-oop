import { Pet } from "./Pet.js";

export class Humster extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'humster';
        this.sound = 'squeak';
        this.emoji = '🐹';
        this.emojiCount = 8;
    };
};