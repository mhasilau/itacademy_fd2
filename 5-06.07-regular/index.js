

// const str = 'Hello World, hello!';
// const regexp = new RegExp('', '');
// const regexp = /hello/gi; //порядок для красоты такой
// console.log(str.match(regexp));
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'TEST'));


// const str = '+375 (44) 581-69-40';
// const regexp = /\d/g;
// const regexp = /\D/g;
// const regexp = /\s/g;
// const regexp = /\S/g;
// const regexp = /\w/g;
// const regexp = /\W/g;
// console.log(str.match(regexp));


// const str = 'hello world';
// const regexp = /Hello$/i;
// const regexp = /^Hello/i;
// console.log(str.match(regexp));


// const str = 'Hello worldddddd';
// const str = '+375 (44) 581-69-40';
// const regexp = /\(\d\d\)/g;
// console.log(str.match(regexp));


// const str = 'Hip Hop Hap';
// const str = 'Hello world!';
// const regexp = /H[ioa]p/g;
// const regexp = /H[A-Z]p/gi;
// const regexp = /[a-k]/g; //[a-zA-Z0-9_] = \w
// const regexp = /[^a-h]/g;
// console.log(str.match(regexp));


// const str = 'From 09:00 to 21-30';
// const reg1 = /\d\d:\d\d/g;
// const reg2 = /\d\d-\d\d/g;
// const reg3 = /\d\d[:-]\d\d/g;
// console.log(str.match(reg1));
// console.log(str.match(reg2));
// console.log(str.match(reg3));


// const str = '+375 (44) 581-69-40 4444 55555';
// const regexp = /\d{3}/g;
// const regexp = /\b\d{3,}\b/g;
// console.log(str.match(regexp));

// const str = '+375 (44) 581-69-40 4444 55555';
// const str = 'Hello Hellow Helo';
// const regexp = /\d*/g;
// const regexp = /\d+/g;
// const regexp = /Hell?ow?/g;
// console.log(str.match(regexp));


// const str = '1 12 123 1234 12345 123456 1234567 13245678 123456789';
// const reg1 = /\b\d{3,}\b/g;
// const reg2 = /\b\d{1,4}\b/g;
// const reg3 = /\b\d{4,}\b/g;
// console.log(str.match(reg1));
// console.log(str.match(reg2));
// console.log(str.match(reg3));


// const str = 'hello JS';
// const regexp = /JS|HTML|SCSS/gi;
// console.log(str.match(regexp));


// const str = 'Mikhail';
// const regexp = /^[a-z]{3,}$/gi;
// console.log(str.match(regexp));


// const str = 'pro100mishok@mail.ru';
// const regexp = /^[-.\w]{3,}@([-.\w]{3,}\.)\b[\w]{2,6}\b/gi;
// console.log(str.match(regexp));
// console.log(regexp.test(str));



// const str = 'http://gitGh34234234ub.com';
// const regexp = /https?:\/\/[a-z0-9]{2,}\.[a-z]{2,6}\b$/gi;
// console.log(str.match(regexp));
// console.log(regexp.test(str));


const str = 'aaa aaa aaa';

const reg1 = /^aaa/g;
const reg2 = /\saaa\s/g;
const reg3 = /aaa$/g;
console.log(str.replace(reg1, '!!!'));
console.log(str.replace(reg2, ' !!! '));
console.log(str.replace(reg3, '!!!'));


