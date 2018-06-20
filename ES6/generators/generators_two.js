const stores = {
    store1: 'New York',
    store2: 'India'
};

const car = {
    id: 1,
    brand: 'Ford',
    doors: 4,
    wheels: 4,
    color: 'Red',
    year: 2017,
    model: 'Mustang',
    stores: stores
};

function* storesGenerator(storesList) {
    yield storesList.store1;
    yield storesList.store2;
}

function* carsGenerator(carObj) {
    // you do not have to iterate through every aspect of an obj, you can yield the
    // the values you want to use
    yield carObj.brand;
    yield carObj.year;
    yield carObj.model;
    // yield carObj.stores.store1;
    // yield carObj.stores.store2;
    yield* storesGenerator(carObj.stores); // when using a generator inside a generator you need to add the star *
}

let newCar = [];

for (let i of carsGenerator(car)) {
    newCar = [...newCar, i];
}

console.log(newCar);