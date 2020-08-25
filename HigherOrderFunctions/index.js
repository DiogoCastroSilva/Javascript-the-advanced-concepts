// Not flexible
// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i < 1000000; i++) {
//         array.push(i);
//     }
//     return 'Access granted to Adam';
// }

// console.log(letAdamLogin());


// Example 1
function giveAccessTo(name) {
    return `Access granted to ${name}`;
}

function authenticate(person) {
    const verify = person.level === 'admin' ? 10000 : 50000;
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
}

function sing({ name }) {
    return `la la la la my name is ${name}`;
}

// High Order function -> Returns a function or accepts a function
function letPerson(person, fn) {
    if (person.level === 'admin') {
        return fn(person)
    } else if (person.level === 'user') {
        return fn(person)
    }
}
    
console.log(letPerson({ name: 'Adam', level: 'user' }, authenticate));
console.log(letPerson({ name: 'Eve', level: 'admin' }, sing));


// Example 2
const multiply = num1 => num2 => num1 * num2;

const multiplyByTen = multiply(10);
const multiplyByFive = multiply(5);

console.log(multiplyByTen(5)); // 50
console.log(multiplyByFive(5)); // 25
console.log(multiply(2)(2)); // 4