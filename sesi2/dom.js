console.log('hello world');
const number = 15;
console.log(number);
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

//selector
const main = document.getElementById('main');
const value = document.getElementById('value');
const buttonA = document.getElementById('buttonA');

//element creator
const title = document.createElement('h1');
title.innerText = 'Hello World';
for (let i = 0; i < student.grades.length; i++) {
  const grade = document.createElement('h2');
  grade.innerText = student.grades[i];
  main.appendChild(grade);
}

//addevent
buttonA.addEventListener('click', () => {
  value.innerText += 'a';
});

//element append
main.appendChild(title);
