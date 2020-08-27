// No side effects
// input --> output
const array = [1, 2, 3, 4, 5, 6];

// Has side effects
function mutateArray(arr) {
    arr.pop();
}

mutateArray(array);
console.log(array);
