const juicer = (choppedFruits) => {
  return new Promise((resolve, reject) => {
    if (choppedFruits.length === 0)
      reject('invalid choppedFruits');
    console.log('start chopping', choppedFruits);
    setTimeout(() => {
      const juices = fruits.map(
        (fruit) => `${fruit.split('-')}-juice`
      );
      resolve(juices);
    }, 1000);
  });
};

const chopper = (peeledFruits) => {
  return new Promise((resolve, reject) => {
    if (peeledFruits.length === 0)
      reject('invalid peeledFruits');
    console.log('start chopping', peeledFruits);
    setTimeout(() => {
      const choppedFruits = fruits.map(
        (fruit) => `chopped-${fruit.split('-')}`
      );
      resolve(choppedFruits);
    }, 1000);
  });
};

const peeler = (fruits) => {
  return new Promise((resolve, reject) => {
    if (fruits.length === 0) reject('invalid fruits');
    console.log('start juicing', fruits);
    setTimeout(() => {
      const peeledFruits = fruits.map(
        (fruit) => `peeled-${fruit}`
      );
      resolve(peeledFruits);
    }, 1000);
  });
};

const fruits = [
  'pineapple',
  'mango',
  'guava',
  'orange',
  'apple',
];

peeler(fruits)
  .then((peeledFruits) => {
    //DILARANG MELAKUKAN NESTED PROMISE HANDLING
    console.log('DONE PEELING');
    return chopper(peeledFruits);
  })
  .then((choppedFruits) => {
    console.log('DONE CHOPPING');
    return juicer(choppedFruits);
  })
  .then((juices) => {
    console.log('DONE JUICING');
    console.log(juices, 'is ready to be served');
  })
  .catch((err) => {
    console.log(err);
  });
