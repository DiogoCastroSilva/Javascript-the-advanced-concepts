// Parallel
// Sequence
// Race

const promisify = (item, delay) =>
    new Promise(resolve =>
        setTimeout(() =>
            resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is done: ${output1} ${output2} ${output3}`;
}

// Parallel --> Runs all the promises at the same time, if one fails all fails
parallel().then(console.log);
