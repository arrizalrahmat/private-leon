//var
// var age = 15; // variable declaration
// var age = 18; // bisa di redeclare
// age = 20; // bisa di reassign
// console.log(age);

// //let
// let myName = 'arrizal';
// let myName = 'rahmat'; // tidak bisa di redeclare
// myName = 'rahmat'; // bisa di reassign
// console.log(myName);

// //const
// const pi = 3.14;
// // const pi = 15 // tidak bisa di redeclare
// // pi = 15; // tidak bisa di reassign

// console.log(pi);

// block scope
// let age = 17;

// if (true) {
//   let age = 18;
//   console.log(age, 'line 25');
// }
// console.log(age, 'line 27');

// const fullName = 'arrizal rahmat kurniawan';
// let size = 'asdasdasd';

// let map = 'hello'

// tipe data
let age = 17;
let umur = '17';
let isTrue = true;

// console.log(age + 15, Number(umur) + 15, isTrue);
if (typeof umur === 'string') {
  umur = Number(umur);
}
age += 8; //shorthand
age = age + 8;
age -= 10; // age = age - 10
age *= 6; // age = age * 6
age /= 3; // age = age / 3
// console.log(age);

let country = 'indonesiabc45adssaf';
let greeting = "what's up";
let hobby = 'I "love" programming ar\'\'gylle';
// console.log(greeting, country);
let fullGreeting = greeting + ' ' + country;
// country[country.length - 1] = 'j';
// console.log(country[country.length - 1]);

// const firstName = 'Arrizal';
// const lastName = 'Kurniawan';

// const fullName = `${firstName}

// ${7 * 7}
// ${lastName}`;

// console.log(fullName);

// let isMale = true;
// isMale = false;
// isMale = !isMale;
// isMale = !isMale;
// isMale = !isMale;
// isMale = !isMale;

// console.log(isMale);

// console.log(10 == '10');
// console.log(10 === '10');
// console.log(10 !== '10');

// const ujangAge = 17;
// const mamanAge = 20;

// const numbers = [1, 5, 2, 7, 13, 12];
// const data = [123, 'abc', true, 5];
const grades = [100, 98, 51, 73];
grades.push(25); // menambah data di belakang
grades.unshift(13); // menambah data di depan
grades.shift(); // memotong data paling depan
grades.pop(); // memotong data terakhir
grades[grades.length] = 72;
grades[0] += 87;

const tropicalFruits = ['orange', 'mango', 'pineapple'];
const nuts = ['peanuts', 'almond', 'peas'];

const fruits = [...tropicalFruits, ...nuts];
const fruits2D = [tropicalFruits, nuts];

const animals = [
  'cat',
  'dog',
  'fish',
  'plankton',
  'squirrel',
];
animals.splice(1, 2, 'elephant', 'giraffe', 'hippopotamus');

console.log(animals);
