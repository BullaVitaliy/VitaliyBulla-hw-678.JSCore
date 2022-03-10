//task-2
console.log("Bulla");


//task-3
const a = "Bulla";
let b = "Vitaliy";
document.write(a, b);
let c = b;
document.write(a, c);


//task-4
const oblject = {
  string: "abc",
  number: 1,
  boolean: true,
  undefined: undefined,
  null: null,
};


//task-5
const isAdult = confirm("Чи досягли ви повнолітнього віку?");
console.log(isAdult);


//task-6
const name = "Vitaliy"; //string
const lastName = "Bulla"; //string
const groupName = "Lv-678.JS Core"; //string
const dataOfBirth = 2001; //number
let maritalStatus = false; //boolean
//sort number -> boolean -> string
console.log(typeof dataOfBirth); //number
console.log(typeof maritalStatus); //boolean
console.log(typeof name); //string
console.log(typeof lastName); //string
console.log(typeof groupName); //string


//task-7
let login = prompt('Write your login', '');
let email = prompt('Write your email', '');
let password = prompt('Write your password', '');
document.write(` Dear ${login}, your email is ${email}, your password is ${password}`);


//task-8
const secondOfmMinutes = 60;
const secondOfHour = secondOfmMinutes * 60;
const secondOfDay = secondOfHour * 24;
const secondOfMonth = secondOfDay * 31;
console.log(`secondOfHour ${secondOfHour}s`);
console.log(`secondOfDay ${secondOfDay}s`);
console.log(`secondOfMonth ${secondOfMonth}s`);
