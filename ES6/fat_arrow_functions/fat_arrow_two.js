const cars = {
    brands: ['Ford', 'Audi', 'BMW'],
    category: 'Sports Car',
    message: function () {
        return this.brands.map((item) => {
            console.log(`${item} is a ${this.category}`);
        });
    }
};


cars.message();