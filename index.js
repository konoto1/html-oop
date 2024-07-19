
import { Dog } from "./js/Dog.js";
import { Car } from "./js/Car.js/"

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(7, 5));
console.log(rexas.manyBones(7));

console.clear();



const brisius = new Dog('Brisius', 'white', 2);
// console.log(brisius.lostLeg());
// console.log(brisius.lostLeg());
// console.log(brisius.lostLeg());
// console.log(brisius.lostLeg());
// console.log(brisius.lostLeg());
// console.log(brisius.lostLeg());
// console.log(brisius);
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());
// console.log(brisius.birthday());


/*
class -> Car(Automobilis)

Savybės:

- pavadinimas(Audi)
- modelis(80)
- spalva
- kuro bako talpa(litrais)
- vidutinės kuro sąnaudos 100km
- ar įjungtas varyklis(default: false)
- greitis(default: 0)

Metodai:

- ijungti varykli
    - ijungto varykli dar karto ijungti negalima, sugadinti starteri
- isjungti varykli
    - isjungto varyklio isjungti negalima...
- pradeti vaziuoti(greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
- vaziuoti(naudoja 1x litro kuro sanaudu)
- sustoti(greitis tiesiog tampa nulinis)
- kiek liko kuro ?
- uzpilti kuro baka(kiek litrais)


*/


console.clear();

const Automobilis = new Car('Audi', '80', 'Raudona', '68ltr', '7.6ltr');

console.log(Automobilis);
console.log(Automobilis.ijungtiVarikli());
console.log(Automobilis.pradetiVaziuoti());
console.log(Automobilis.vaziuoti());
console.log(Automobilis.kiekLikoKuro());
console.log(Automobilis.sustoti());
console.log(Automobilis.isjungtiVarikli());
console.log(Automobilis.uzpiltiKuro());

















