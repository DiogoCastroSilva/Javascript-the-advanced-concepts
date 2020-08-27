// No side effects
// input --> output
const array = [1, 2, 3, 4, 5, 6];

// Has side effects
function mutateArray(arr) {
    arr.pop();
}

function mutateArray2(arr) {
    arr.forEach(num => {
        arr.push(1);
    });
}

function log() {
    console.log('Hi');
}

mutateArray(array);
console.log(array);


const pureArray = [1, 2, 3, 4, 5, 6];

// Pure functions
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(num => num * 2);
}

removeLastItem(pureArray);
console.log(pureArray); // [1, 2, 3, 4, 5, 6] --> Dind't change the original array
multiplyBy2(pureArray); // [1, 2, 3, 4, 5, 6] --> Dind't change the original array


// Idempotence --> Making the code predictable
function notGood(num) {
    return Math.random(num);
}

function good(num) {
    return num * 2;
}

// This will have two diferent outputs - NOT PURE
notGood(3);
notGood(3);

// Will always return the same
good(3); // 6
good(3); // 6


// Imperative & Declarative

// Imperative
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

// Declarative
Array(1000).fill(null).map((_, index) => index).forEach(item => console.log(item));


// Imutability
const obj = { name: 'Diogo' };

function clone(obj) {
    return { ...obj };
}

const newObjClone = clone(obj);


// HOF
const hof = () => () => 5;
const hof2 = fn => fn(5);
hof2(function a(x) { return x }); // 5

// Closure
const closure = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
};

console.log(closure()());

// Currying
const multiply = a => b => a * b;
const multiplyByThree = multiply(3);
console.log(multiplyByThree(4)); // 12

// Partial Application -> Similiar to currying
// Comparing
//   Currying
const multiplication = a => b => c => a * b * c;
//   Partial Application
const partialMultiplicationBy5 = multiplication.bind(null, 5);
partialMultiplicationBy5(4, 10);

