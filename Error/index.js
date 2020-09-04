// Throw
function throwError() {
    throw 'Error';
    throw new Error('Error');
}

// throwError();

// Creating Error
function createError() {
    const error = new Error('Error Name');
    return error;
}

const error = createError();
console.log(error.stack);

// Built in Errors
function errorTypes() {
    new SyntaxError();
    new Error();
    new ReferenceError();
}


// try {} catch(error) {} -> Works with sync code

function fail() {
    try{
        throw new Error('New Error');
    } catch(error) {
        console.log('We made a error', error);
    } finally {
        console.log('Will run even after an error');
    }
}

fail();


// Async Errors
Promise.resolve('async fail')
    .then(response => {
        throw new Error('#1 fail');
        return response
    })
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        return e;
    })
    .then(e => {
        console.log(e);
    })
    .catch(e => {
        console.log('Final error');
    });


// Working with async code with Async/Await
(async function() {
    try {
        await Promise.resolve('will run');
        await Promise.reject('oopsie!');
        await Promise.reject('oopsie 2! - won\'t get here!!');
    } catch(e) {
        console.log('Error async Async/Await', e);
    }
    console.log('outside - is this still goog?');
})();



// Extending Errors
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'authenticationError';
        this.favouriteSnack = 'grapes';
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'databaseError';
    }
}

class PermissionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'permissionError';
    }
}

const a = new AuthenticationError('oopsie');
a.favouriteSnack;
