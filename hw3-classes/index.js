class Human {
    constructor (name, surname, age, sex) {
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.sex = sex
    }

    fullName() {
        if (typeof this.sex === 'string' && this.sex === 'man') {
            return `${this.name} ${this.surname}, he is ${this.age} years old`;
        } else if (typeof this.sex === 'string' && this.sex === 'woman') {
            return `${this.name} ${this.surname}, she is ${this.age} years old`;
        }
        
    }

}

class Worker extends Human {

    #rate = 15;

    constructor (name, surname, hours) {
        super(name, surname),
        this.hours = hours
    }

    get rate() {
        return this.#rate;
    }

    set rate (newRate) {
        if (typeof newRate === 'number') {
            this.#rate = newRate;
        }
    }

    sallary() {
        return `${this.name} ${this.surname}'s sallary is ${this.#rate * this.hours}`
    }

}

class Developer extends Human {
    constructor (name, surname, company, position) {
        super(name, surname),
        this.company = company,
        this.position = position
    }

    workerPosition() {
        return `${this.name} ${this.surname} works in ${this.company} on position ${this.position}`
    }

}

const mikeData = new Human('Mike', 'Wasowski', 30, 'man');
console.log(mikeData.fullName());
// const lisbethData = new Human('Lisbeth', 'Salander', 30, 'woman');
// console.log(lisbethData.fullName());

const mikeWork = new Worker('Mike', 'Wasowski', 150);
mikeWork.rate = 40;
console.log(mikeWork.sallary());

const mikePosition = new Developer('Mike', 'Wasowski', 'Google', 'Data architect');
console.log(mikePosition.workerPosition());
