# Closure

Closure allows to create private variables

<br />

## Basic Exemple

<br />

````javascript
    const addToCounter = () => {
        let counter = 0;
        
        return () => {
            counter++;
            return counter;
        };
    };

    const add = addToCounter();

    console.log(add());
    console.log(add());
````