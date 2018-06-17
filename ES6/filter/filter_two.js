const products = [
    {name: 'iPad', category: 'Device', number: 20, price: 200},
    {name: 'Sony 3D', category: 'TV', number: 0, price: 400},
    {name: 'E256', category: 'Blender', number: 3, price: 50},
    {name: 'Super Vision', category: 'TV', number: 7, price: 500},
    {name: 'iPhone 7', category: 'Phone', number: 40, price: 2}
];

const results = products.filter(function (item) {
    return item.category === 'TV' && item.number > 0
});

console.log(results);