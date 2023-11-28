'use strict';
/*
// constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // not suggested because of performance issue
    // this.calcAge = function(){
    //     console.log(2023 - this.birthYear);
    // }
}

const Ravi = new Person('Ravi Aajugiya', 2003)

// not work as this keyword is undefined
// const Ravi =  Person('Ravi Aajugiya', 2003) 

console.log(Ravi);
console.log(Ravi instanceof Person);


// Prototype
Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
}

Ravi.calcAge();

console.log(Ravi.__proto__);
console.log(Ravi.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(Ravi));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.gender = 'Male';
console.log(Ravi);

console.log(Ravi.__proto__);
console.log(Ravi.__proto__.__proto__);
console.log(Ravi.__proto__.__proto__.__proto__);


const arr = [3, 5, 6, 3, 2, 5, 2, 3, 2, 5, 2, 3, 2, 2, 2, 2];

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());


// coding challenge
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();



// ES6 classes => still implement prototypal inheritance behind the scene

// class expression => special kind of function
// const PersonEx = class{

// }

// class declaration
class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }

    // all things outside of const will be prototype method
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    static hey() {
        console.log('HIIIIII');
    }
}

const Ravi1 = new PersonCL('Ravi', 2003);

// getter setter
const account = {
    owner: 'Jonas',
    movements: [5, 5, 12, 50],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


// object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const self = Object.create(PersonProto);
self.init('Ravi', 2003);
self.calcAge();
*/

// Inheritance between class

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};


const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};


Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Ravi = new Student('Ravi', 2023, 'Computer Science');
Ravi.introduce();
Ravi.calcAge();


// challeng 3 
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 100;
    console.log(`${this.make} is going at ${this.speed} `);
};

Car.prototype.brake = function () {
    this.speed -= 20;
    console.log(`${this.make} is going at ${this.speed} /`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} , with a charge of ${this.charge}`
    );
};

const tesla = new EV('Tesla', 500, 24);
tesla.chargeBattery(9);
console.log(tesla);
tesla.brake();
tesla.accelerate();




// using ES6 class
class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }

    // all things outside of const will be prototype method
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    static hey() {
        console.log('HIIIIII');
    }
}


class StudentCL extends PersonCL {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    // student method ... 
    // we can also override method here
}



// object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentCL.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

const jay = Object.create(StudentProto);
jay.init('jay', 2020, "CS");
jay.calcAge();








