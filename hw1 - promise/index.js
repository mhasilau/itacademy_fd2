// 1.	Написать функцию, которая внутри себя генерит рандомное число от 0 до 10. Функция ПРИНИМАЕТ в себя количество милисекунд. Если число чётное, то вывести в консоль это число. Если нет, то алерт с призвольным текстом. Внутри использовать промис. Будем считать, что на чётных числах делаем resolve, иначе reject

const randomTen = () =>  Math.floor(Math.random() * 10);

const evenNeven = (ms) => new Promise ( (resolve, reject) => {
    let rand = randomTen();
    setTimeout ( () => {
        rand % 2 ? reject(rand) : resolve(rand);
    }, ms);
})

evenNeven(2000)
    .then( res => console.log('Number is:', res))
    .catch( err => (alert(`Number is odd - ${err}`)));


// 2.	Сделать несколько промисов. Внутри каждого лежит таймаут с произвольной задержкой. Сделать так, чтобы они вызывались по порядку вне зависимости от задерджки таймаута.

const randomHundred = () =>  Math.floor(Math.random() * 100);
const randomTime = () => Math.floor(Math.random() * 10000);

const firstPromise = () => new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log(`First promise is ${randomHundred()}`);
        console.log(`First timeout is ${randomTime()}`);
        resolve();
    }, randomTime())
});
const secondPromise = () => new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log(`Second promise is ${randomHundred()}`);
        console.log(`Second timeout is ${randomTime()}`);
        resolve();
    }, randomTime())
});
const thirdPromise = () => new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log(`Third promise is ${randomHundred()}`);
        console.log(`Third timeout is ${randomTime()}`);
        resolve();
    }, randomTime())
});
const fourthPromise = () => new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log(`Fourth promise is ${randomHundred()}`);
        console.log(`Fourth timeout is ${randomTime()}`);
        resolve();
    }, randomTime())
});
                        
firstPromise()
    .then( () => secondPromise())
    .then( () => thirdPromise())
    .then( () => fourthPromise())
    .then( () => console.log('Chain complete!'));


// 3.	В цикле создать несколько промисов с таймаутами внутри. У таймаутов будет рандомная задержка. Цикл сильно длинный не делайте. Скажем 3-4 итерации. Полученную пачку промисов пропустить через Promise.all и Promise.race

const randomTimeFor = () => Math.floor(Math.random() * 10000);
const promiseArr = [];
for (let i = 1; i < 5; i++) {
    const cyclePromise = new Promise (resolve => {
        setTimeout( () => {
            console.log(`Promise number ${i} said hello!`);
            resolve();
        }, randomTimeFor());
    })
    promiseArr.push(cyclePromise)
}

Promise.all(promiseArr)
    .then( () => console.log('done all'));
// Promise.race(promiseArr)
//     .then( () => console.log('done rase'));
