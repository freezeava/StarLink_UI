// document.all[8].innerText="Peter Parker";

// Concept of Selecting Element

//   document.getElementById(),document.getElementsByTagName(),document.getElementsByClassName();

// let Img=document.getElementById("mainImg")
// console.log(Img);

// console.dir(Img.src="assets/creation_2.jpeg");


// let head1=document.getElementsByTagName("h1")[0];
// // console.dir(h1);

// console.dir(head1.innerText="Peter Parker");

// let classget=document.getElementsByClassName("oldImg");

// for(let i=0;i<classget.length;i++){
//     console.dir(classget[i].src="assets/creation_2.jpeg");
// }

// Query Selector concept it will work like css selector

// document.querySelector(),document.querySelectorAll();

// let Paratwo=document.querySelectorAll("p");
// console.log(Paratwo[1]);

// Paratwo[1].innerHTML="<u>Iron man</u>";


//Attribute manipualtion

// let paa=document.querySelector("img");

// console.log(paa.getAttribute("id"));

// console.log(paa.setAttribute("id","desc"));


// let paraid=document.querySelector("#description");
// paraid.style.color="green";


//ClassList concept



//  let param=document.querySelector("img");

// console.dir(param.classList);

// console.log(param.classList.add("abc"));
// console.log(param.classList.toggle("abcd"));
// console.log(param.classList.toggle("abcd"))
// console.log(param.classList.remove("abc"));

// console.log(param.parentElement);
// console.log(param.previousElementSibling.style.color="green");
// console.log(param.nextElementSibling);
// console.log(param.childElementCount)


let newh3=document.createElement("h3");
newh3.innerText="I am new h3 heading";
console.log(newh3);


let body=document.querySelector("body");
body.appendchild("newh3");













