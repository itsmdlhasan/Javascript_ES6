class Vehicle {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getDetails() {
        console.log(`Originated in Germany the ${this.brand} company introduces their new model called ${this.model} on ${this.year} as ${this.color} color.`);
    }
}
// উপরের টুকু হচ্ছে Vehicle নামের একটি class বা blueprint

const car1 = new Vehicle('BMW', 'M4 Coupe', '2023', 'Red');
const car2 = new Vehicle('Audi', 'S7 Sedan', '2018', 'Black');
car1.getDetails();
car2.getDetails();

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'};
const {price} = product;
console.log(price);