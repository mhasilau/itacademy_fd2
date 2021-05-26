// console.log('hello world');

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log('the end');

// setInterval ( () => {
//     console.log('test');
// }, 1010);

// setTimeout ( () => {
//     console.log('test2');
// }, 2000);

// const myInterval = setInterval(() => {
//     console.log('test3');
// }, 1000);

// setTimeout(() => {
//     console.log('complete');
//     clearInterval(myInterval);
// }, 5000);

// console.log('start');
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// console.log('finish');

// const a = 1;
// const b = 10;
// printNumbers (a, b)
// function printNumbers(from, to) {
//     let i = from;
//     const interval = setInterval(() => {
//         if (i <= to ) {
//             console.log(i);
//             i++;
//         } else setTimeout(() => {
//             clearInterval(interval);
//             console.log('i did it');
//         }, 0);
//     }, 500);
// } 



// setTimeout( () => {
//     console.log('start loading...');
//     setTimeout( () => {
//         console.log('continue loading');
//         setTimeout(() => {
//             console.log('data processed');
//             setTimeout(() => {
//                 console.log('complete');
//             }, 500);
//         }, 2000);
//     }, 1000);
// }, 2000);


// try {
//     let x = 0;
//     // const x = 0;
//     x++;
//     console.log('try');
// } catch (error) {
//     console.log('catch', error);
// } finally {
// console.log('finaly');
// }
// console.log('code down');



// const fetchTodo = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/15');
// }
// const start = () => {
//     console.log('start');
// }

// const myPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         start();
//         // fetchTodo()
//         //     .then( response => response.json())
//         //     .then( result => console.log(result))
//         //     .catch( err => console.log('error:', err) )
//         //     .finally( () => console.log('finally'));
//         const obj = {
//             name: 'Mikhail',
//             age: '29'
//         };
//         // resolve(obj);
//         reject('unknown error');
//     }, 1000)
// })

// myPromise
//     .then( (result) => {
//         const newResult = result;
//         newResult.job = 'medic';
//         return newResult;
//     })
//     .then( res => console.log('result', res))
//     .catch( error => console.log('error:', error))
//     .finally( () => console.log('finally'));

// // console.log('out');
// setTimeout( () => {
//     console.log('temeout');
// }, 3000);


// const delay = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//             const obj = {
//                 name: 'Mikhail',
//                 age: '29'
//             };
//             resolve(obj);
//     }, 1000);
// });

// delay
//     .then( res => console.log('done', res ));




// const fetchTodo = () => {
//     return fetch('ttps://jsonplaceholder.typicode.com/todos/15');
// }
// const start = () => {
//     console.log('start');
// }
// const myPromise = new Promise( (resolve, reject) => {
//         fetchTodo()
//             .then( response => response.json())
//             .then( result => resolve(result))
//             .catch( err => reject(err) );
// });
// myPromise
//     .then( result => console.log('success:', result))
//     .catch( error => console.log('error:', error))
//     .finally( () => console.log('finally'));


const startPromise = () => new Promise( resolve => {
    setTimeout( () => {
        console.log('start');
        resolve();
    }, 2000)
});
const middlePromise = () => new Promise( resolve => {
    setTimeout( () => {
        console.log('middle');
        resolve();
    }, 3000)
});
const endPromise = () => new Promise( resolve => {
    setTimeout( () => {
        console.log('end');
        resolve();
    }, 1000)
});

startPromise()
    .then( () => middlePromise())
    .then( () => endPromise())
    .then( () => console.log('complete'));

// Promise.all([startPromise, middlePromise, endPromise]) //resolve only
//     .then( () => console.log('complete all'));

// Promise.race([startPromise, middlePromise, endPromise]) //who is first => then
// .then( () => console.log('complete rase'));












// const fetchTodo = () => {
//     return fetch('ttps://jsonplaceholder.typicode.com/todos/15');
// }
// const fetchUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/15')
// }

