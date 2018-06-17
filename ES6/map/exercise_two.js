const cars = [
    {name: 'Ford', price: 200},
    {name: 'Nissan', price: 400},
    {name: 'Nissan', price: 600}
];

const rupies = cars.map(function (item) {
    return `${item.name} is ${item.price * 200} rupies`;
});

console.log(rupies);