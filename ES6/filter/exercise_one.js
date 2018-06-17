const channels = [
    {name: 'HBO', premium: true},
    {name: 'LIFE', premium: false},
    {name: 'Max', premium: true},
    {name: 'Cooking Channel', premium: false},
    {name: 'WOBI', premium: false}
];

const result = channels.filter(function (item) {
    return item.premium;
});

console.log(result);