const purchases = [
    {quantity: 2, amount: 100},
    {quantity: 5, amount: 100},
    {quantity: 10, amount: 100},
];

let total = 0;

purchases.forEach(function (item) {
    total += item.quantity * item.amount;
});

console.log(total);