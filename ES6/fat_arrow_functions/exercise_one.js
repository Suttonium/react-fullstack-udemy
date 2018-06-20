const names = ["James", "Ron", "Lisa", "Tommy"];
let randomName = function (items) {
    return items[Math.floor(Math.random() * items.length)]
};
let randomNumber = function (maxNumber, minNumber) {
    return Math.floor(Math.random() * maxNumber) + minNumber;
};
console.log(randomName(names) + "'s magic number is " + randomNumber(5, 2));

//////////REFACTORED//////////////
const namesV2 = ["James", "Ron", "Lisa", "Tommy"];
let randomNameV2 = items => {
    return items[Math.floor(Math.random() * items.length)]
};

let randomNumberV2 = (maxNumber, minNumber) => {
    return Math.floor(Math.random() * maxNumber) + minNumber;
};

console.log(randomNameV2(namesV2) + "'s magic number is " + randomNumberV2(5, 2));
