//task-1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z ] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//task-2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let [, name2, , name4] = data.names;
//  let [, age2, , age4] = data.ages;
//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
//  console.log(age4); //26

//task-3
// function mul(...allArgs) {
//   let dob = 1;
//   for (let i = 0; i < allArgs.length - 1; i++) {
//     if (typeof allArgs[i] === "number") {
//       dob = dob * allArgs[i];
//     }
//   }

//   if (dob > 1) {
//     return dob;
//   } else {
//     return 0;
//   }
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

//task-4
// let server = {
//   data: 0,
//   convertToString: function (callback) {
//     callback(() => this.data + "");
//   },
// };
// let client = {
//   server: server,
//   result: "",
//   calc: function (data) {
//     this.server.data = data;
//     this.server.convertToString(this.notification());
//   },
//   notification: function () {
//     return (callback) => {
//       this.result = callback();
//     };
//   },
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

//task-5
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];

// function mapBuilder(keysArray, valuesArrays) {
//   let newMap = new Map();
//   for (let i = 0; i < keysArray.length; i++) {
//     newMap.set(keysArray[i], valuesArrays[i]);
//   }
//   return newMap;
// }

// let map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2));
