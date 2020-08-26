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
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }

    makeFort() {
        return 'Strongest fort in the worl made';
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby);

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);