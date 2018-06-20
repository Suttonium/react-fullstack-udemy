const trips = [
    {to: 'Brazil', distance: 1000},
    {to: 'Chine', distance: 2500},
    {to: 'India', distance: 3000}
];

console.log(
    trips.reduce(function (start, item) {
        return start + item.distance;
    }, 0)
);