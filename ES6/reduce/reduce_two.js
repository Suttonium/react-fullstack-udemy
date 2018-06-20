const users = [
    {name: 'Francis', last_name: 'Norton', age: 25},
    {name: 'Martha', last_name: 'Norton', age: 58},
    {name: 'Rob', last_name: 'Norton', age: 57},
];

const firstNames = users.reduce(function (start, item) {
    start.push(item.name);
    return start;
}, []);

console.log(firstNames);