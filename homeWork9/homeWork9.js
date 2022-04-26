//hw9 jQuery
//task-1
let $href = $("a").attr("href");
const $re = /^https:\/\//;
let $result = $re.test($href);

if ($result === true) {
  $("a").attr("target", "_blank");
  console.log("correct url!");
} else if ($result === false) {
    throw Error('not correct url!')
}

//task-2
// $("h2.head").css('background', 'green');
// $('h2>span.inner').css('font-size', '35px')

//task-3
// let $divOne = $("body").children("div:first");
// console.log($divOne);
// $("body").prepend($divOne);

// let $headerTwo = $("body").children("h3:last");
// console.log($headerTwo);
// $('body').append($headerTwo);

//task-4
// $(".checkbox_check").on("change", function () {
//   const arrayChecked = [];

//   $(".checkbox_check:checked").each(function () {
//     arrayChecked.push("el");
//   });
//   console.log(arrayChecked);

//   if (arrayChecked.length == 3) {
//     $("input").prop("disabled", true);
//   }
// });
