const computers = [
    {type: 'Laptop', price: 124, os: 'Windows'},
    {type: 'Desk', price: 124, os: 'Mac'},
    {type: 'Desk', price: 124, os: 'Windows'},
    {type: 'Laptop', price: 124, os: 'Mac'},
    {type: 'Laptop', price: 124, os: 'Windows'},
];


let osCounts = computers.reduce(function (start, item) {
    return item.os === 'Mac' ? {windows: start.windows, mac: start.mac + 1} : {
        windows: start.windows + 1,
        mac: start.mac
    };
}, {windows: 0, mac: 0});

console.log(osCounts);