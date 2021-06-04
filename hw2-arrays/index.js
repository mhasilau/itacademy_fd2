//task 1-------------------------------------------------
// const userArr = prompt('enter some string').split('');

//const changeCase = userArr.map( el => { ( el === el.toUpperCase() ) ? el.toLowerCase() : el.toUpperCase() }); // WTF

// const changeCase = userArr.map( el => {
//     if (el === el.toUpperCase()) {
//         return el.toLowerCase();
//     } else return el.toUpperCase();
// });
// console.log(changeCase.join(''));


//task 2-------------------------------------------------
// const arr = prompt('enter some string').toLowerCase().split('');
// const removeDuplicates = arr => {
//     return arr.reduce( (acc, el) => acc.includes(el) ? acc : [...acc, el], []); // cool method. like. 
// }
// console.log(removeDuplicates(arr));


//task 3-------------------------------------------------
// const arr1 = ['1', '2', '3', '4', '5'];
// const arr2 = ['10', '20', '30', '40', '50', '60', '70'];
// let arr11 = [];

// const sum = (arr1, arr2) => {
//     let arr22 = [];
//     if (arr1.length >= arr2.length) {
//         arr11 = arr1;
//         arr22 = arr2;
//     } else {
//         arr11 = arr2;
//         arr22 = arr1; 
//     }
//     arr11.forEach( (el1, i1) => {
//         arr22.forEach( (el2, i2) => {
//             if ( i1 == i2) {
//                 arr11.splice(i1, 1, String((Number(el1) + Number(el2))));
//             }
//         })
//     });
// }

// sum(arr1, arr2)
// console.log(arr11);


//task 4-------------------------------------------------
const userArr = prompt('enter some string').split('');
// const removeDuplicates = userArr.reduce( (acc, el) => acc.includes(el) ? acc : [...acc, el], []); 
// let counter = 0;
// const countIdentic = arr => {
//     return arr.forEach( el => {
//         console.log(`${el} is ${userArr.filter(item => item === el).length}`);
//     });
// };
// countIdentic(removeDuplicates);


const sortuserArr = userArr.sort();
let i = 0;
const obj = {};
sortuserArr.forEach( el, i => {
    if (i === i + 1) {
        i++
    } else if (i !== i + 1 || i + 1 === null) {
        obj = {
            el: i
        }
        i = 0;
    }
})
console.log(obj);



//task 5
// const userArr1 = prompt('enter the first string').split('');
// const userArr2 = prompt('enter the second string').split('');
// const userArr3 = userArr1.concat(userArr2);
// const removeDuplicates = arr => {
//     return arr.reduce( (acc, el) => acc.includes(el) ? acc : [...acc, el], []); 
// }
// console.log(removeDuplicates(userArr3));


