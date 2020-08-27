// Basics of OOP
// Creating a Fary Tale

// Firts creating the character elf
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return `Attack with ${this.weapon}`
    }
};

// Factory function to create Elfs
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `Attack with ${this.weapon}`
        }
    };
}

const peter = createElf('Peter', 'stones');
console.log(peter);

// Inheritance
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return `Attack with ${this.weapon}`
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }

    attack(cry) {
        return `Attack with ${cry}`;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }

    attack() {
        return `arghhhhh`;
    }

    makeFort() {
        return 'Strongest fort in the worl made';
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby);
console.log(dolby.attack('weee'));

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);
console.log(shrek.attack());

console.log(Ogre.prototype.isPrototypeOf(shrek)); // true
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); // true

console.log(shrek instanceof Ogre); // true
console.log(shrek instanceof Character); // true
console.log(dolby instanceof Ogre); // false
console.log(dolby instanceof Character); // true