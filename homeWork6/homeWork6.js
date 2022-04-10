//hw 6 DOM

//task-1
// document.body.childNodes[1].innerHTML = "Last";
// document.getElementById("test").innerHTML = "Last";

//task-2
let imgTeg = document.querySelector('img');
imgTeg.setAttribute('src', 'cat.jpg');
alert(imgTeg.outerHTML);

//task-3
// for (let [item, value] of document.querySelectorAll("div > p").entries()) {
//     console.log(`Selector text ${item}: ${value.innerText} `);
//   }

//task-4
//---------------1---------------------
// const list = document.body.querySelector('#list')
// alert(list.childNodes[1].innerText)
// alert(list.childNodes[9].innerText)
// alert(list.childNodes[3].innerText)
// alert(list.childNodes[7].innerText)
// alert(list.childNodes[5].innerText)
// --------------2---------------------
// const list = document.body.querySelector('#list')
// alert(list.children[0].innerHTML)
// alert(list.children[4].innerHTML)
// alert(list.children[1].innerHTML)
// alert(list.children[3].innerHTML)
// alert(list.children[2].innerHTML)

//task-5
// let h1 = document.querySelector("h1");
// h1.style.cssText = "display: inline-block; background-color: #67b450;";
// let div = document.querySelector("#myDiv");
// div.children[0].style.fontWeight = "900";
// div.children[1].style.color = "red";
// div.children[2].style.textDecoration = "underline";
// div.childNodes[7].style.fontStyle = "italic";

// let ul = document.querySelector("#myList");
// ul.style.cssText = "display: flex; list-style-type: none;";

// let span = document.querySelector("span");
// span.style.display = " none";

//task-6
// let prompt1 = prompt("Write any text 1:");
// let prompt2 = prompt("Write any text 2:");
// let value1 = document.querySelector("#input1").value = prompt2;
// let value2 = document.querySelector("#input2").value = prompt1;

//task-7
// let main = document.createElement("main");
// main.className = "mainClass check item";

// let div = document.createElement("div");
// div.setAttribute("id", "myDiv");
// main.prepend(div);

// let p = document.createElement("p");
// p.innerText = "First paragraph"; //or innerHTML
// div.prepend(p);

// console.log(main);
