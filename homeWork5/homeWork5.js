"use strict";
//oop

//task-1
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

function propsCount(currentObject) {
  let ObjectToArray = Object.keys(currentObject);
  console.log('Count fields: ' + ObjectToArray.length);
}
propsCount(mentor);



//task-2
// const anyObj = {
//   field1: "one",
//   field2: 1,
//   field3: 100,
//   field4: 'two',
//   field5: 12,
// };

// function showProps(anyObj) {
//   console.log(Object.values(anyObj));

//   for (const [key] of Object.entries(anyObj)) {
//     return console.log(Object.keys(anyObj));
//   }
// }
// showProps(anyObj);

//task-3
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     console.log(this.name + " " + this.surname);
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(midleName) {
//     return this.name + " " + this.surname + " " + midleName;
//   }

//   showCourse() {
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     return currentYear - this.year;
//   }
// }

// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());



//task-4
//array for sorting
// const arrSalaries = [];
// const arrNames = [];

// class Worker {
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }
//   #experience = 1.2;

//   showSalary() {
//     let salary = this.dayRate * this.workingDays;
//     return console.log(`Salary: ${salary}`);
//   }

//   showSalaryWithExperience() {
//     let salaryExperience = this.dayRate * this.workingDays * this.#experience;

//     if (this.#experience == 1.5) {
//       arrSalaries.push(salaryExperience);

//       arrSalaries.sort(function (a, b) {
//         return a - b;
//       });

//       arrNames.push(this.fullName);

//       const fromIndex = arrNames.indexOf("Tom Tomson");
//       const toIndex = 2;

//       const element = arrNames.splice(fromIndex, 1)[0];

//       arrNames.splice(toIndex, 2, element);
//     }

//     return console.log(this.fullName + " " + "salary: " + salaryExperience);
//   }

//   get showExp() {
//     return this.#experience;
//   }

//   set setExp(value) {
//     this.#experience = value;
//   }

//   sort() {
//     console.log("\n" + "Sorted salary:");
//     for (let i = 0; i < arrSalaries.length; i++) {
//       console.log(arrNames[i] + ': ' +arrSalaries[i]);
//     }
//   }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// console.log("=======================");

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// console.log("========================");

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// worker3.sort();



// task-5
// class GeometricFigure {
//   getArea() {
//     return 0;
//   }
//   toString() {
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }

// class Square extends GeometricFigure {
//   constructor(side) {
//     super();
//     this.side = side;
//   }
//   getArea() {
//     return this.side ** 2;
//   }
// }

// class Circle extends GeometricFigure {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   getArea() {
//     return 3.14 * this.radius ** 2;
//   }
// }

// class Triangle extends GeometricFigure {
//   constructor(legA, legB) {
//     super();
//     this.legA = legA;
//     this.legB = legB;
//   }
//   getArea() {
//     return (this.legA * this.legB) / 2;
//   }
// }

// function handleFigures(figures) {
//   let total = 0;
//   for (let i = 0; i < figures.length; i++) {
//     console.log(
//       `${GeometricFigure.name}: ${figures[i]} - area: ${figures[i].getArea()}`
//     );
//     total = figures[i].getArea() + total;
//   }
//   console.log(`Total area: ${total}`);
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// handleFigures(figures);
