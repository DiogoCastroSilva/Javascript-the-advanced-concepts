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