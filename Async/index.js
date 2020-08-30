// Promises

// Basic structure
const promise = (valid) => new Promise((resolve, reject) => {
    if (valid) {
        resolve('Stuff worked');
    } else {
        reject(`Stuff didn't work`);
    }
});

promise(true)
    .then(result => {
        return result + '!';
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error);
    });

// Async Code
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?');
});

Promise
    .all([promise(true), promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    });


// Real world exemple
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

// If one fails, all fail
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json());
})).then(results => {
    console.log(results);
}).catch(error => {
    console.log(error);
});


// Async/Await
// Uses Promise's under the wood
// Makes the code more readable
const movePlayer = (distance, direction) => new Promise((resolve, reject) => {
    return resolve(`Player moved ${distance} meters to the ${direction}`);
});

const movements = [];

async function playerStart() {
    try {
        const leftMove = await movePlayer(5, 'left');
        movements.push(leftMove);

        const rightMove = await movePlayer(10, 'right');
        movements.push(rightMove);

        const frontMove = await movePlayer(15, 'front');
        movements.push(frontMove);
    } catch(e) {
        console.log('An error occurred', e);
    } finally {
        console.log(`Player movements: ${movements}`);
    }
}

playerStart();

// Real world Async/Await
async function fetchUsers() {
    const resp = await fetch(urls[0]);
    const users = await resp.json();
    console.log(users);
}

fetchUsers();

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            fetch(url).then(resp => resp.json());
        }));
    
        console.log('users:', users);
        console.log('posts:', posts);
        console.log('albums:', albums);
    } catch(e) {
        console.log('Error:', e);
    }
};


// Calback Queue - Task Queue
// Uses Web API
setTimeout(() => {
    console.log('1', 'Is the loneliest number', 0);
}, 0);
setTimeout(() => {
    console.log('2', 'Can be as bad as one', 10);
}, 0);

// Job Queue - Microtask Queue
Promise.resolve('hi').then(data => console.log('2', data));

// 3
console.log('3', 'is a crowd');