// function sum(num1, num2) {
//   return num1 + num2;
// }

// function formula(num1, num2, tambahFn, kaliFn) {
//   const sum = tambahFn(num1, num2);
//   const result = kaliFn(sum, 10);

//   return result;
// }

// const result = formula(3, 4, sum, function (num1, num2) {
//   return num1 * num2;
// });

// console.log(result);

const animals = [
  {
    species: 'cat',
    color: 'brown',
    gender: 'male',
    size: 8,
  },
  {
    species: 'dog',
    color: 'white',
    gender: 'female',
    size: 15,
  },
  {
    species: 'fish',
    color: 'yellow',
    gender: 'female',
    size: 3,
  },
  {
    species: 'duck',
    color: 'green',
    gender: 'male',
    size: 5,
  },
];

// dengan loop biasa
// const animalNames = [];

// for (let i = 0; i < animals.length; i++) {
//   animalNames.push(animals[i].species);
// }

// console.log(animalNames);

// dengan loop forEach
// const animalNames = [];
// animals.forEach((value) => {
//   animalNames.push(value.species);
// });

// console.log(animalNames);

// dengan loop map
// const animalNames = animals.map((animal) => {
//   return animal.species;
// });
// console.log(animalNames);

// filtrasi data dengan .filter
const maleAnimals = animals.filter((animal) => {
  if (animal.gender === 'male') {
    return true;
  }
  return false;
});

// filtrasi data dengan .map
const femaleAnimals = animals.map((animal) => {
  if (animal.gender === 'female') {
    return animal;
  }
});

// console.log(maleAnimals);
// console.log(femaleAnimals);

//reduce
const totalSize = animals.reduce(
  (prev, curr) => prev + curr.size,
  0
);

console.log(totalSize);
