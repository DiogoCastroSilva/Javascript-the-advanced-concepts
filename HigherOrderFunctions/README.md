# Higher-Order Functions

<u>Higher-Order Functions</u> are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order Function is a function that receives a function as an argument or returns the function as output.

## Example of built in HOF (Higher Order functions)

<br />

### Map Function
<br />

````javascript
    const arr1 = [1, 2, 3];

    const arr2 = arr1.map(function(item) {
        return item * 2;
    });

    console.log(arr2);

````

<br />

### Filter Function

<br />

````javascript
    const persons = [
        { name: 'Peter', age: 16 },
        { name: 'Mark', age: 18 },
        { name: 'John', age: 27 },
        { name: 'Jane', age: 14 },
        { name: 'Tony', age: 24},
    ];

    const fullAge = persons.filter(person => person.age >= 18);

    console.log(fullAge);
````