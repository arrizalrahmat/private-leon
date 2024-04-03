const student = {
  name: 'Arrizal',
  major: 'Information System',
  gpa: 3.5,
  grades: [100, 95, 80, 100, 55, 85],
  profile: {
    username: 'arrizalrahmat',
    email: 'arrizalrahmat@mail.com',
    password: '123456',
    address: {
      city: 'Jakarta',
      country: 'Indonesia',
    },
  },
  classes: [
    {
      name: 'System Security',
      code: 'yg4598',
      instructor: 'Jajang',
    },
    {
      name: 'Statistics',
      code: 'y65567',
      instructor: 'Solihin',
    },
  ],
  greetings: function () {
    return `Hello ${this.name}`;
  },
};

const myGreeting = student.greetings();
console.log(myGreeting);

const nama = 'name';

const { grades, profile, classes } = student;
// const grades = student.grades;
// const profile = student.profile;
// const classes = student.classes;

// const {
//   profile: { address },
// } = student;

// const { city } = address;
const address = student.profile.address;

const city = student.profile.address.city;

// console.log(city);

// console.log(address);

//deklarasi function 1
// function helloWorld(name) {
//   return `Hello ${name}`;
// }
// //deklarasi function 2 anonymous function
// const helloWorld2 = function (name) {
//   return `Hello ${name}`;
// };
// //deklarasi function 3
// const helloWorld3 = (name) => {
//   return `Hello ${name}`;
// };

// console.log(helloWorld3('Arrizal'));
