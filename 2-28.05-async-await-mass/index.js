// const fetchTodos = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/15');
// }
// const fetchUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users');
// }


// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const todosUrl = 'https://jsonplaceholder.typicode.com/todos/15';

// const fetchDataByUrl = url => new Promise (( resolve, reject) => {
//     fetch(url)
//         .then( response => response.json())
//         .then( result => resolve(result))
//         .catch( error => reject(error));
// });

// const getData = async () => {
//     let users = null;
//     let todos = null;

//     try {
//         users = await fetchDataByUrl(usersUrl);
//         todos = await fetchDataByUrl(todosUrl);
//     } catch (error) {
//         console.log('error', error);
//     } finally {
//         return users && todos ? {users, todos} : null;
//     }
// }

// let result;
// getData().then( res => {
//     result = res;
//     console.log(result);
// });


// const arr = [5, 4, 6, 43, 56, 4, 5, 6 , 8, 4];
// arr.forEach( (el, i, arr) => {
//     console.log(i, el);
// });

// const newArr = arr.map( (el, i, arr) => {
//     return el * 2;
// })

// const newArr = arr.filter( (el, i, arr) => {
//     return !(el % 2)
// })

// const newArr = arr.reduce( (acc, el, i, arr) => {
//     return [...acc, { name: 'Mike', age: el*2 }];
// }, [])

// const obj = {
//     name: 'Mike',
//     age: 29,
//     job: 'admin'
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const idx = newArr.findIndex( el => el.age === 12)
// console.log(idx);
// const newArr2 = newArr.find( el => {
//     return el.age === 12;
// })

// console.log(newArr2);

// console.log(arr.indexOf(4));



// const users = [
//     {
//         name: 'mike',
//         age: 29
//     },
//     {
//         name: 'andy',
//         age: 20
//     },
//     {
//         name: 'tom',
//         age: 32
//     },
//     {
//         name: 'den',
//         age: 25
//     }
// ];

// const upper = users.map( el => el.name.toUpperCase());
// console.log(upper);

// const arr = [5, 4, 6, 43, 56, 4, 5, 6 , 8, 4];
// const getFirst = (array, n) => {
//     return array.filter( (el, i) => {
//         return i < n;
//     });
// }
// console.log(getFirst(arr, 4));



// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const getLast = (array, n) => {
//     return array.reverse().filter( (el, i) => {
//         return i < n;
//     }).reverse();
// }

// const getLast = (array, n) => {
//     return array.filter( (el, i, array) => {
//         return i > (array.length - 1 - n);
//     })
// }

// console.log(getLast(arr, 4));


// const getMiddle = ( array, n, m) => {
//     return array.filter( (el, i, array) => {
//         return i >= n && i <= m ; 
//     })
// }

// console.log(getMiddle(arr, 2, 6));




// const users = [
//     {
//         name: 'mike',
//         surname: 'wasovski',
//         age: 29
//     },
//     {
//         name: 'andy',
//         surname: 'andersen',
//         age: 20
//     },
//     {
//         name: 'tom',
//         surname: 'd',
//         age: 32
//     },
//     {
//         name: 'den',
//         surname: 'kozlov',
//         age: 25
//     }
// ];

// const fullName  =  users.map( (el, i) => {
//             return {
//                 fullname: `${el.name} ${el.surname}`,
//                 age: el.age
//             }
//     });

// const fullName  =  users.reduce( (acc, el, i) => {
//     return [ ...acc,
//         {
//         fullname: `${el.name} ${el.surname}`,
//         age: el.age
//     }
//     ]
// }, []);

// console.log(fullName);


// const str = 'hello world';
// const arr = str.split(' ');
// console.log(arr);


const str = '2025-12-31';
// console.log(str.split('-').reverse().join('.'));
const arr = str.split('-');

const newArr = str.split('-').reduce( (acc, el, i, arr) => {
    return [...acc, arr[arr.length - 1 - i]]
}, []).join('.');


console.log(newArr);
