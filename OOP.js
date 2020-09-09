class Car {
	constructor(color, model) {
		this.color = color;
		this.model = model;
		this.mileage = 0;
	}
	drive() {
		this.mileage = this.mileage + 20;
	}
}

function Person(name, age) {
	this.name = name;
	this.age = age;
	return this;
}

var Jim = new Person("Jim", 25);

var car = new Car("blue", "Camry");

car.drive();

console.log(car);

console.log(Jim.name + " has a " + car.color + " " + car.model);

var statement = `${Jim.name} has a ${car.color} ${car.model}`;
