//Errors, try...catch

//task-1
// function calcRectangleArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw new Error("Введіть число!!");
//   } else {
//     s = width * height;
//   }
// }

// try {
//   calcRectangleArea(5, 'f');
//   console.log(`Площа прямокутника = ${s}`);
// } catch (exception) {
//   console.log(exception.stack);
// }

//task-2
// function checkAge() {
//   try {
//     const isAge = prompt("Write your age");
//     if (isAge == "" || isAge === null) {
//       throw new Error("The field is empty! Please enter your age");
//     } else if (isNaN(isAge)) {
//       throw new Error("Write data type number");
//     } else if (isAge < 14) {
//       throw new Error("You are small");
//     } else {
//       alert("Wellcome");
//     }
//   } catch (exception) {
//     console.log(exception.stack);
//   }
// }
// checkAge();

//task-4
function showUser(id) {
  try {
    if (typeof id == "number") {
      if (id > 0) {
        const new_object = new Object({ id: id });
      } else {
        throw new Error(`ID is negative: ${id}`);
      }
    } else if (typeof id == "object") {
      const new_arr = [];

      for (let i = 0; i < id.length; i++) {
        if (id[i] > 0) {
          new_arr.push({ id: id[i] });
        } else if (id[i] < 0) {
          console.log(`Error: ID must not be negative: ${id[i]}`);
        }
      }
      console.log(new_arr);
    }
  } catch (error) {
    console.log(error);
  }
}

function showUsers(ids) {
  showUser(ids);
}
showUsers([7, -12, 44, 22]);


//not worked
// function showUser(id) {
//   if (id < 0) {
//     // throw new Error("Write positive number");
//   } else {
//     return { id };
//   }
// }

// function showUsers(ids) {
//   for (let i = 1; i < ids.length; i++) {
//     let element = ids[i];
//     showUser(element);
//     if(element > 0) {
//         console.log(` ${element}`);
//     }
//     if (element < 0) {
//       throw new Error(`ID must not be negative: ${element} `);
//     }

//   }
// //   console.log(`id : ${element}`);
// //   return [{'id': element}]
// }

// try {
//   showUsers([7, -12, 44, 22]);
// } catch (exception) {
//   console.log(exception.stack);
// }

// function showUsers(ids) {
//   try {
//     for (let i = 1; i < ids.length; i++) {
//       const element = array[i];
//       showUser(element);
//     }

//     if (element  0) {
//       return [{ ids }];
//     }

//   } catch (exception) {
//       console.log('exception');
//     // throw new Error(`ID must not be negative: `);
//   }
// }
// showUsers([7, -12, 44, 22]);