// Inheritance
// What it is --> is a
// Statefull
// Side effects
// Imperative

// This scenario would be very coupled
// User
//  Watcher
//  Character
//      Elf
//          Junior Elf
//      Ogre

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


// Composition
// What it has --> has a
// Stateless
// Pure
// Declerative
function attack(character) {
    return Object.assign({}, character, { attack: () => 'Attack' });
}

function Elf(name, weapon, type) {
    let elf = {
        name,
        weapon,
        type
    };

    return attack(elf);
}