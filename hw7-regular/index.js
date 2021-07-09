//1. Определите, что год находится в интервале от 1900 до 2100
const year = '1900';
const checkYear = /^(19\d\d|20\d\d|2100)$/g;
console.log(year.match(checkYear));
console.log(checkYear.test(year));
console.log('---------------------------------');

// 2. С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным
const time = '24:00';
const checkTime = /^([01]\d|2[0-3])[.:]([0-5]\d)/g;
console.log(time.match(checkTime));
console.log(checkTime.test(time));
console.log('---------------------------------');

// 3. Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы
const doubleStr = 'Hello all the world';
const checkDoubleStr = /\D*/gi;
// const checkDoubleStr = /\W*\w*(\w)\1\w*\w*/gi;
console.log(doubleStr.replace(checkDoubleStr, 'lol'));

// console.log(checkDoubleStr.test(doubleStr));
console.log('---------------------------------');

// 4. Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'

