
export class Dog {
    constructor(vardas, spalva, amzius) {
        this.name = vardas;
        this.color = spalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTail = true;
    }
    birthday() {
        if (this.age >= 20) {
            return `Taip ilgai sunys negyvena 🙀`;
        }
        this.age++;
        return `Suns ${this.age} gimtadienis!!🎂`;
    }

    lostLeg() {
        if (this.legsCount === 0) {
            return `Suo jau nebeturi koju....😔`;
        }
        this.legsCount--;
        return `Suo prarado koja...`;
    }

    hi() {
        return 'Suo sako: au au!!';
    }
    think() {
        return 'Suo galvoja: duok kaula';
    }
    addNumbers(a, b) {
        return `suo suskaiciavo: ${a} + ${b} = ${a + b}`;
    }
    manyBones(count) {
        return `Many bones: ${'🦴'.repeat(count)}`;
    }
}


/* class -> Car (Automobilis)

- pavadinimas (Audi)
- modelis (80)
- spalva
- kuro bako talpa (ltr)
- vidutines kuro sanaudos (ltrr/100km)
- ar ijungtas variklis (default: false)
- greitis (default: 0)

metodai:
- ijungti varikli
    - ijungto variklio dar karta ijungti negalima, sugadinsi starteri
- isjungti varikli
    - isjungto variklio isjungti negalima
- pradeti vaziuoti (greitis tiesiog tampa !== 0 ir sunaudoja 2xltr kuro)
- vaziuoti (naudoja 1xltr kuro sanaudu )
- sustoti (greitis tampa === 0)
- kiek liko kuro?
- uzpilti kuro baka (kiek ltr)
*/