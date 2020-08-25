
// Example 1

// This function won't create a new array after creation
// bigArray belogs to the scope of heavyDuty
function heavyDuty() {
    const bigArray = new Array(7000).fill('😊');

    return index => {
        return bigArray[index];
    };
}

const getHeavyDuty = heavyDuty();

console.log(getHeavyDuty(1));
console.log(getHeavyDuty(1));


// Example 2

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;

    const passTime = () => timeWithoutDestruction += 1;
    const totalPeaceTime = () => timeWithoutDestruction;

    const launch = () => {
        timeWithoutDestruction = 0;
        return '💥';
    };

    setInterval(passTime, 1000);

    return {
        launch,
        totalPeaceTime
    };
};

const nuclearBtn = makeNuclearButton();

console.log(nuclearBtn.totalPeaceTime()); // 0
setTimeout(() => console.log(nuclearBtn.totalPeaceTime()), 1000); // 1
setTimeout(() => console.log(nuclearBtn.totalPeaceTime()), 1000); // 2
setTimeout(() => console.log(nuclearBtn.launch()), 1000); // 💥
setTimeout(() => console.log(nuclearBtn.totalPeaceTime()), 1000); // 0

