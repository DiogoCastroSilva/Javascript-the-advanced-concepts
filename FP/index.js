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

mutateArray(array);
console.log(array);
