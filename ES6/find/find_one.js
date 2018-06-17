//difference between find and filter is that find returns the first instance that follows the given rule
//within the anonymous function

const brands = [
    {name: 'Apple', id: 1},
    {name: 'HP', id: 2},
    {name: 'Samsung', id: 3},
    {name: 'Samsung', id: 4}
];

const result = brands.find(function (item) {
    return item.name === 'Samsung';
});

console.log(result);