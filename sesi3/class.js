export class Person {
  constructor(name, gender, ktp) {
    this.name = name;
    this.gender = gender;
    this.ktp = ktp;
  }

  doWork() {
    return 'work is done!';
  }

  greetings() {
    return `Hello from ${this.name}`;
  }
}

export class Employee extends Person {
  constructor(name, gender, ktp) {
    super(name, gender, ktp);
    this.company = 'goto';
  }

  doWork() {
    return `Work work work and more work to be done`;
  }

  //encapsulation
  getEmployeeIdNumber() {
    return `${this.name[0].toUpperCase()}${this.gender[0].toUpperCase()}${this.ktp
      .split('')
      .splice(5)
      .reverse()
      .join('')}`;
  }
}

export class Student extends Person {
  study() {
    return `${this.name} is studying`;
  }
}

const arrizal = new Employee(
  'arrizal',
  'male',
  '123456789'
);
const jonathan = new Employee(
  'Jonathan',
  'male',
  '987654321'
);

const ujang = new Person('ujang', 'male', '678954321');
const pepen = new Student('pepen', 'female', '543216789');
// console.log(pepen.doWork());
// console.log(ujang.doWork());
// console.log(arrizal.doWork());
// console.log(jonathan.greetings());
