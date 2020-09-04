// Constructing an Array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    // Add all items to the left
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.get(0); // undefined
myArray.push(1); // 1
myArray.pop(); // 1

myArray.push('You')
myArray.push('are');
myArray.push('nice');
myArray.push('!');

myArray.delete(myArray.length); // ['You', 'are', 'nice']


// Reverse a string
function reverseString(str) {
    if (str || str.length < 2 || typeof str !== 'string') return;
    return str.split('').reverse().join('');
  }


reverseString('ola'); // alo
reverseString('Hello world'); // dlrow olleH

// Merge Sort Array
function mergeSortArray(arr1, arr2) {
    return arr1.concat(arr2).sort((x, z) => x- z);
}

console.log(mergeSortArray([0, 3, 4, 31], [4, 6, 30]));
mergeSortArray([0, 3, 4, 31], [4, 6, 30]); // [0, 3, 4, 4, 6, 30, 31]