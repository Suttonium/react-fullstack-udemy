class Car {
    constructor({condition, wheels, avail}) {
        this.condition = condition;
        this.wheels = wheels;
        this.avail = avail;
    }
}

class Ford extends Car {
    constructor(condition, wheels, avail) {
        super({condition, wheels, avail});
    }
}

const car = new Car({
    condition: 'New', wheels: 4, avail: true
});
const ford = new Ford({
    condition: 'Old', wheels: 7, avail: false
});

console.log(car);