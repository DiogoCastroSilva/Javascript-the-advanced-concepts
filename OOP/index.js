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


// Polymorphism - One interface, multiple implementations
class Shape {
    area() {
        throw Error('Shape is an interface, cannot be used directly');
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
        if (shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area()
        }
        throw Error('Bad argument shape.');
    }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
console.log(`Sum of areas: ${cumulateShapes(shapes)}`);


// Polymorphism - Function overloading (JavaScript doesn't allows to have two functions with the same name)
// So to implment it is needed to verify the arguments
function volumeCuboid (length, breadth, height) {
    return length * breadth * height
  }
  
  function volumeCube (length) {
    return volumeCuboid(length, length, length)
  }
  
  
  // Overloading happens here
  function calculateVolume (...args) {
    if (args.length === 3) return volumeCuboid(...args)
    return volumeCube(args[0])
  }

  // OR use a factory funstion
  function createShape (shape, w, h = null) {
    if (shape === 'triangle') return new Triangle(w, h)
    if (shape === 'rectangle') return new Rectangle(w, h)
    if (shape === 'circle') return new Circle(w)
  }