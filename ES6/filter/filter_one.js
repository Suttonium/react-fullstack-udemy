const products = [
    {name: 'iPad', category: 'Device'},
    {name: 'Sony 3D', category: 'TV'},
    {name: 'E256', category: 'Blender'},
    {name: 'Super Vision', category: 'TV'},
    {name: 'iPhone 7', category: 'Phone'}
];

const result = products.filter(function (item) {
    return item.category === 'TV';
});

console.log(result);