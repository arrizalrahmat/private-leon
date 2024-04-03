// console.log('hello1');
// console.log('hello2');
// console.log('hello3');
// setTimeout(() => {
//   console.log('customer1');
// }, 100);
// console.log('hello5');
// setTimeout(() => {
//   console.log('customer2');
// }, 50);
// console.log('hello7');
// console.log('hello8');
// console.log('hello9');
// console.log('hello10');
// const myPromise = new Promise((resolve, reject) => {
//   //   resolve('Resolved');
//   reject('Rejected');
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Proses selesai');
//   });

const cooking = (ingredients) => {
  return new Promise((resolve, reject) => {
    if (ingredients.length === 0) {
      reject('Invalid ingredients');
    }

    setTimeout(() => {
      const foods = ingredients.map((el) => `fried-${el}`);
      resolve(foods);
    }, 1000);
  });
};

cooking(['fish', 'chicken', 'duck'])
  .then((foods) => {
    console.log(foods);
  })
  .catch((err) => {
    console.log(err);
  });
