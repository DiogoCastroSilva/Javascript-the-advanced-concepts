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
