class Car {
    constructor({status, wheels, avail}) {
        this.status = status;
        this.wheels = wheels;
        this.avail = avail;
    }
}

const car = new Car({
    status: 'New',
    wheels: 4,
    avail: () => {
        console.log('avail')
    }
});

console.log(car);