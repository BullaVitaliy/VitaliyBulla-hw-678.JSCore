//task-1
// let x = '1';
// let y = '2';
// let res1 = x + y;
// console.log(res1);
// console.log(typeof res1);

// let res2 = 'true' + y;
// console.log(res2);
// console.log(typeof res2);

// let res3 = x < y;
// console.log(res3);
// console.log(typeof res3);

// let res4 = +('x' + 'y');
// console.log(res4);
// console.log(typeof res4);

//task-2
// let a = +prompt('Введіть ціле число:');
// console.log(`Число: ${a}`);

// if(a % 2 === 0){
//     console.log('парне');
// } else {
//     console.log('НЕ парне');
// }

// if(a < 0) {
//     console.log('від\'ємне');
// } else {
//     console.log('додатнє');
// }

// if(a % 7 === 0) {
//     console.log('кратне 7');
// } else {
//     console.log('НЕ кратне 7');
// }

//task-3
// let array = [];
// array[0] = ' ' + 34;
// array[1] = ' ' + 'anyString';
// array[2] = ' ' + true;
// array[3] = ' ' + null;

// document.write('К-сть елементів:' + array.length + ' ' + '|');

// array[4] = ' ' + prompt('Введіть будь-яке значення');

// document.write(' П\'ятий елемент:' + array[4] + ' ' + '|');

// array.shift();

// document.write(' ' + '[' + array + ']');

//task-4
// let cities = ['Rome', 'Lviv', 'Warsaw'];
// console.log(cities.join('*'));

//task-5
// let isAdult = +prompt('Введіть ваш вік: ');
// if(isAdult >= 18) {
//     alert('Ви досягли повнолітнього віку');
// } else {
//    alert('Ви ще надто молоді');
// }


// task-6
// const a = +prompt("Довжина сторони трикутника - a: ");
// const b = +prompt("Довжина сторони трикутника - b: ");
// const c = +prompt("Довжина сторони трикутника - c: ");

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   alert("Incorrect data");
// }

// if (
//   //перевірка чи є гіпотенуза
//   c ** 2 == (a ** 2) + (b ** 2) ||
//   a ** 2 == (c ** 2) + (b ** 2) ||
//   b ** 2 == (a ** 2) + (c ** 2)
// ) {
//   console.log("прямокутник");
//   // S для прямокутного трикутника
//   const s = (a * b) / 2 || (c * b) / 2 || (a * c) / 2;
//   console.log("S = " + s.toFixed(3));
// } else {
//   console.log("НЕ прямокутник");
//   // S для не прямокутного трикутника
//   const p = (1 / 2) * (a + b + c);
//   const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   console.log("S = " + s.toFixed(3));
// }


// task-7
let currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
console.log(`Зараз ${currentHour}год ${currentMinute}хв`);

//спосіб 1 - if...else if
// if(currentHour >= 23 || currentHour <= 5) {
//     console.log('Доброї ночі!');
// } else if(currentHour > 5 && currentHour < 11) {
//     console.log('Доброго ранку!');
// } else if(currentHour >= 11 && currentHour <= 17) {
//     console.log('Доброго дня!');
// } else {
//     console.log('Доброго вечора!');
// }

//спосіб 2 - switch...case
const goodNight = 23 && 0 && 1 && 2 && 3 && 4 && 5;
const goodMorning = 6 && 7 && 8 && 9 && 10 && 11;
const goodAfternoon = 12 && 13 && 14 && 15 && 16 && 17;

switch (currentHour) {
    case goodNight:
        console.log('Доброї ночі!');
        break;

    case goodMoning: 
        console.log('Доброго ранку!');
        break;

    case goodAfternoon: 
        console.log('Доброго дня!');
        break;
    
    default: 
        console.log('Доброго вечора!');
        break;
}