// CS 81, Module 3B Math Toolkit, by GregH, 7/7/25

const double = n => n * 2;

let n = 3;
console.log(n + ' * 2 = ' + double(n));

const square = n => n ** 2;

console.log('\n' + n + ' squared = ' + square(n));

const isEven = n => !(n % 2);

console.log('\nIs ' + n + ' even? ' + isEven(n));

const isOdd = n => !!(n % 2);

console.log('\nIs ' + n + ' odd? ' + isOdd(n));
