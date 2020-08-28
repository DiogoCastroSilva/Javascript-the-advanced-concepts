# Inheritance Vs Composition

Inheritance is a mechanism to define an ‘is a’ relationship, often used to reuse code of a parent class in a subclass.

In contrary to inheritance, object composition defines a ‘has a’ relationship. Combining the power of Objects and Functional Programming.

## Inheritance

````javascript
class Animal {
    eat() { /* ... */ }
}

class Dog extends Animal {
    speak() { /* ... */ }
}

class Snake extends Animal {
    shedSkin() { /* ... */ }
}
````

## Composition

````javascript
class CanineSpeakBehavior {
    speak() {
        console.log('Woof');
    }

    warn() {
        console.log('Grrrrr');
    }
}

class NoSpeakBehavior { 
    speak() {
        // Nothing
    }
}

class Dog {
    constructor(speakBehavior = new CanineSpeakBehavior()) {
        this.speakBehavior = speakBehavior;
    }

    speak() {
        this.speakBehavior.speak();
    }

    warn() {
        this.speakBehavior.warn();
    }
}
````