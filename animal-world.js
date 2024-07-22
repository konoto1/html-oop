import { Dog } from "./inheritance/Dog.js";
import { Cat } from "./inheritance/Cat.js";
import { Humster } from "./inheritance/Humster.js";
import { Shark } from "./inheritance/Shark.js";
import { GoldenFish } from "./inheritance/GoldenFish.js";
import { Dolphin } from "./inheritance/Dolphin.js";
import { Eagle } from "./inheritance/Eagle.js";
import { Pigeon } from "./inheritance/Pigeon.js";

const rexas = new Dog('Rex');
console.log(rexas.intro());
console.log(rexas.voice());

const tom = new Cat('Tom');
console.log(tom.intro());
console.log(tom.voice());

const gizmo = new Humster('Gizmo');
console.log(gizmo.intro());
console.log(gizmo.voice());

const leny = new Shark('Leny');
console.log(leny.intro());
console.log(leny.voice());

const nemo = new GoldenFish('Nemo');
console.log(nemo.intro());
console.log(nemo.voice());

const flipper = new Dolphin('Flipper');
console.log(flipper.intro());
console.log(flipper.voice());

const eagle = new Eagle('Apollo');
console.log(eagle.intro());
console.log(eagle.voice());

const pigeon = new Pigeon('Duke');
console.log(pigeon.intro());
console.log(pigeon.voice());