# Async

Using promises, we can write asynchronous programs in a more manageable way. Using Async/Await syntax, a promise-based asynchronous code can be written in a synchronous format which saves a lot of time and code becomes scalable.

# Exemple

### Promises

````javascript
    var myPromise = new Promise((resolve, reject) => {
        resolve( 'successPayload' );
        // reject( 'errorPayload' );
    });
    myPromise
        .then( successCallback )
        .catch( errorCallback )
        .finally( finallyCallback );
````

### Async

````javascript
    async function myFunction() {
        var result = await new MyPromise();
        console.log( result );
    }
    
    myFunction(); // returns a promise
````