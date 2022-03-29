//loops, function
//task-1
// const array = [2, 3, 4, 5];

//for
// let result = 1;
// for (let i = 0; i < array.length; i++) {
//     result = result * array[i]
// }
// console.log(result);

//while
// let result = 1;
// let i = 0;
// while(i < array.length) {
//     result = result * array[i]
//     i++
// }
// console.log(result);

//task-2
// for(let i = 0; i <= 15; i++) {
//     i % 2 == 0 ? document.write(`${i} is even <br \/>`) : document.write(`${i} is odd <br \/>`) ;

//     // if(i % 2 == 0) {
//     //     document.write(`${i} is even`)
//     // } else {
//     //     document.write(`${i} is odd`)
//     // }
// }

//task-3
// const array = [];

// function randArray(count) {
//     for(let i = 1; i <= count; i++) {
//         array.push(Math.floor(Math.random() * 500) + 1)
//     }
// }

// randArray(5)
// console.log(array);

//task-4
// const a = +prompt('Write number');
// const b = +prompt('Write degree');

// function raiseToDegree(a, b) {
//     alert(Math.round(a) ** Math.round(b))
// }

// raiseToDegree(a, b);

//task-5
// function findMin() {
//   min = arguments[0];

//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) min = arguments[i];
//   }
// }

// findMin(12, 14, 4, -4, 0.2);
// console.log(`min = ${min}`);

//task-6



//task-7
// function lastElem(arr, count) {
//   if (count > 0) {
//     console.log(arr.splice(-count, count));
//   } else {
//     console.log(arr.splice(-1));
//   }
// }
// lastElem([3, 4, 10, -5]);
// lastElem([3, 4, 10, -5], 2);
// lastElem([3, 4, 10, -5], 8);

// let arr = [3, 4, 10, -5];
// console.log(arr.splice(-2, 2));


//task-8
// function getString(str) {
//   let StrToArray = str.split(" ");
//   console.log(StrToArray);

//   StrToArray.forEach(function (abc, i, StrToArray) {
//     const nameCapitalized = abc.charAt(0).toUpperCase() + abc.slice(1);
//     console.log(nameCapitalized);
//   });

// }
// getString("i love java script");
