const previous = 200;
const current = [
    {expense: 'Guitar', amount: 200},
    {expense: 'Mic', amount: 100},
    {expense: 'Drums', amount: 100},
];

//start equals the 0 in this case. kind of like saying i = 0 in a for loop
//then iterates through the current array
//once the loop goes to the next iteration, the 0 is replaced with whatever the previous iteration returned.

//so in this loop, it goes:
//  previous + 200 = 400
//200 + 100 = 500
//300 + 100 = 600
const totalExpenses = current.reduce(function (start, item) {
    return start + item.amount;
}, previous); // starting point

console.log(totalExpenses);