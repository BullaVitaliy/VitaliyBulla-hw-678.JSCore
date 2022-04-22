//task-1
function upperCase(str) {
  let regExp = /^[A-Z]/;
  let result = regExp.test(str);
  if (result === true) {
    console.log("Strings starts with uppercase character");
  } else if (result === false) {
    console.log("String's not starts with uppercase character");
  }
}
upperCase("regexp");
// upperCase("RegExp");

// task-2
// function checkEmail(str) {
//     let regExp = /^\w+@\D+\.\D{3}/
//     let res = regExp.test(str);
//     console.log(res);
// }
// checkEmail("Qmail2@gmail.com");

//task-3
// const str = "cdbBdbsbz";
// const re1 = /(db+d{1})/gi;
// const re2 = /b{2,}/i;
// const re3 = /d{1}/i;
// console.log(str.match(re1) + " " + str.match(re2) + " " + str.match(re3));

//task-4
// const str = 'Script, Java';
// let firt_str = str.replace('Script', 'Java');
// let last_str = firt_str.replace('Java', 'Script');
// console.log(last_str);

//task-5
// function cardValid(cardNumber) {
// const re = /\d{4}-\d{4}-\d{4}-\d{4}/;
//   let result = re.test(cardNumber);
//   if (result === true) {
//     console.log("Card number correct");
//   } else if (result === false) {
//     console.log("Card number not correct");
//   }
// }

// cardValid("9999-9999-9999-9999");

//task-6
// function checkEmail(email) {
//   const re = /^[^\.!@#\$%\^&\*\(\)_\+-=]\w+[\-]?\w+@(\w+)\.(\w{3})$/i;

//   let result = re.test(email);

//   if (result === true) {
//     console.log("Email correct!");
//   } else if (result === false) {
//     console.log("Email not correct!");
//   }
// }
// checkEmail("my_mail@gmail.com");//Email is correct!
// checkEmail("#my_mail@gmail.com");//Email is not correct!
// checkEmail('my_ma--il@gmail.com');//Email is not correct!

//task-7
// function checkLogin(login) {
//   const re = /^[^\d][^!@#\$%\^&\*\(\)_\+-=]\w+\.?\w+/;
//   const re_second = /(\d\.\d|\d)/g;

//   let result = re.test(login);
//   console.log(result);
//   let result_second = login.match(re_second);
//   console.log(result_second);
// }

// checkLogin("ee1.1ret3"); //true
// // checkLogin("ee1*1ret3"); //false
