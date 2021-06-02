// const user = {
//     name: 'Mike',
//     age: 29,
//     // sayHello() {
//     //     console.log('hello', this.name);
//     // }
// }


// // user.sayHello();

// const user1 = {
//     name: 'Pol',
//     age: 20
// }

// const user2 = {
//     name: 'John',
//     age: 25
// }

// const logName = function() {
//     console.log(this.name);
// }


// user1.sayHello = logName;
// user1.sayHello();
// user2.sayHello = logName;
// user2.sayHello();



// class Developer {
//     static course = 'JS';
    
//     constructor() {
//         this.check = 'IT-Academy';
//     };
// }

// const myObj = new Developer();


// // console.log(myObj);

// class User extends Developer {
//     constructor (name, age) {
//         super(),
//         this.name = name;
//         this.age = age;
//     };
// }

// const newUser = new User ('Mike', 29);
// console.log(newUser);





// class Rect {
//     constructor(width, length) {
//         this.width = width,
//         this.length = length
//     };

//     square() {
//         return this.width * this.length;
//     } 

// }

// class Parall extends Rect {
//     constructor (width, length, height) {
//         super (width, length),
//         this.height = height
//     };

//     volume() {
//         return super.square() * this.height;
//     }

// }

// // const rect = new Rect(4, 4);
// // console.log(rect.square());
// const parall = new Parall (4, 4, 4);
// console.log(parall.volume());


// class User {

//     #someVar = 100;

//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     };

//     get someVar() {
//         return this.#someVar;
//     }

//     set someVar(newSomeVar) {
//         if (typeof newSomeVar === 'number') {
//             this.#someVar = newSomeVar;
//         }
//     }

// }

// const user = new User('Mike', 29)
// console.log(user);

// user.someVar = '101';

// console.log(user);


class Human {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    };
}



class Worker extends Human {
    #rate = 100;
    constructor(name, surname, days) {
        super(name, surname)
        this.days = days
    };

        get rate() {
            return this.#rate;
        }

    set someVar(newRate) {
        if (typeof newRate === 'number') {
            this.#rate = newRate;
        };
    }

    sallary() {
        return this.#rate * this.days;
    }

}

// const mike = new Human('Mike', 'Vasowski');
const mikeSallary = new Worker('Mike', 'Wasowski', 29);
console.log(mikeSallary.name, mikeSallary.surname);
console.log(mikeSallary.sallary());

