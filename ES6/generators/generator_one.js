function* brands() {
    yield 'Ford';
    yield 'Nissan';
    yield 'Chevy';
    yield 'Toyota';
    yield 'Honda';
}

const gen = brands();

for (let i of gen) {
    console.log(i);
}