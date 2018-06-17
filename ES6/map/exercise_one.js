const paintings = [
    {name: 'Mona Lisa', width: 200, height: 200},
    {name: 'The Scream', width: 400, height: 600},
    {name: 'The Last Supper', width: 600, height: 700}
];

const output = paintings.map(function (item) {
    return `${item.name} is ${item.width} x ${item.height}`;
});

console.log(output);