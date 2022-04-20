//BOM. Events

//task-1
// let myWindow = window.open("", "", "width=300, height=300");
// console.log(myWindow);

// setTimeout(function () {
//   myWindow.resizeTo(500, 500);
//   console.log("Window size was change");
// }, 2000);

// setTimeout(function () {
//   myWindow.moveTo(200, 200);
//   console.log("Window position was change");
// }, 4000);

// setTimeout(function () {
//   myWindow.close();
// }, 6000);

//task-2
// function changeCSS() {
//     let button = document.querySelector('.buttonChange');
//     button.addEventListener('click', function(){
//         let p = document.getElementById('text');
//         p.style.cssText = 'color: orange; font-size: 20px; font-family: Comic Sans MS;'
//     })
// }
// changeCSS()

//task-3
// let divEl = document.getElementById("bottuns");
// let body = document.querySelector("body");

// divEl.children[0].addEventListener("click", buttonOne);
// function buttonOne() {
//   body.style.backgroundColor = "blue";
// }

// divEl.children[1].addEventListener("dblclick", function () {
//   body.style.backgroundColor = "pink";
// });

// divEl.children[2].addEventListener("keydown", function () {
//   body.style.backgroundColor = "brown";
// });
// divEl.children[2].addEventListener("keyup", function () {
//   body.style.backgroundColor = "white";
// });

// divEl.children[3].addEventListener("mouseover", function () {
//   body.style.backgroundColor = "yellow";
//   console.log(divEl.children[3]);
// });
// divEl.children[3].addEventListener("mouseout", function () {
//   body.style.backgroundColor = "white";
//   console.log(divEl.children[3]);
// });

//task-4
// const buttonChooseDel = document.querySelector("#btn-choose-del");
// buttonChooseDel.addEventListener("click", function () {
//   let listName = document.getElementById("list-name");
//   listName.removeChild(listName.options[listName.selectedIndex]);
// });

//task-5
// const liveButton = document.querySelector(".live-button");

// liveButton.addEventListener("keypress", function () {
//   let p = document.createElement("p");
//   p.innerHTML = " I was pressed! ";
//   liveButton.after(p);
// });
// liveButton.addEventListener("mouseover", function () {
//   let p = document.createElement("p");
//   p.innerHTML = " Mouse on me! ";
//   liveButton.after(p);
// });
// liveButton.addEventListener("mouseout", function () {
//   let p = document.createElement("p");
//   p.innerHTML = " Mouse is not on me! ";
//   liveButton.after(p);
// });

//task-6
const p_width = document.querySelector("#width");
const screen_width = (p_width.innerHTML = "Width: " + window.innerWidth);

const p_height = document.querySelector("#height");
const screen_height = (p_height.innerHTML = "Height: " + window.innerHeight);

window.addEventListener("resize", function () {
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;

  p_width.innerHTML = "Width: " + newWidth;
  p_height.innerHTML = "Height: " + newHeight;
});

// window.addEventListener("resize", function (e) {
//   // let newWidth = window.innerWidth;
//   // let newHeight = window.innerHeight;
//   document.write(
//     "width: " + screen.width + ", " + "height: " + screen.height
//   );
// });

//task-7
// const cityArr = {
//   ger: ["Berlin", "Hummburg", "Dortmund"],
//   usa: ["New-York", "Washington", "Bostin"],
//   ukr: ["Lviv", "Kyiv", "Odessa", "Dnipro"],
// };

// let prime_select = document.getElementById("country");
// prime_select.addEventListener("change", createList);
// prime_select.addEventListener("change", toParagraph);

// let city_select = document.getElementById("cities");
// city_select.addEventListener("change", toParagraph);

// function createList() {
//   city_select.innerHTML = "";
//   let selected_contry = prime_select.value;
//   for (let i = 0; i < cityArr[selected_contry].length; i++) {
//     let new_option = document.createElement("option");
//     new_option.innerHTML = cityArr[selected_contry][i];
//     city_select.append(new_option);
//   }
// }

// let parag = document.querySelector("p");
// function toParagraph() {
//   parag.innerHTML = "";
//   parag.innerHTML =
//     prime_select.options[prime_select.selectedIndex].text +
//     ", " +
//     city_select.options[city_select.selectedIndex].text;
// }
