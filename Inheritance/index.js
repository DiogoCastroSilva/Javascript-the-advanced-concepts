// Example 1

let human = {
    mortal: true
};

let socrates = Object.create(human);
socrates.age = 45;

console.log(human.isPrototypeOf(socrates)); // true


// Exercises to extend the functionality of a built in object

// Exercise 1
// Date object => to have a new method lastYear() that show the last year in format 'YYYY'

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

console.log(new Date('1900-10-10').lastYear()); // 1899

// Exercise 2
// .map() to print '🧊' at the end of each item

Array.prototype.map = function() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(this[i] + '🧊');
    }
    return array;
}

console.log([1, 2, 3].map()); // 1🧊, 2🧊, 3🧊

