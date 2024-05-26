//Question :1
let para=document.createElement("P");



let div=document.createElement("div");

let body=document.querySelector("body");


body.appendChild(div);


div.appendChild(para);

para.classList.add("redtxt");

para.append("Hey! I am red.");

//Question:2

let h3=document.createElement("h3");
div.appendChild(h3);
h3.classList.add("bluetxt");
h3.append("I am blue text");

//Question :3

let div2=document.createElement("div");
body.appendChild(div2);

div2.classList.add("borderprp");

let h2=document.createElement("h2");

div2.appendChild(h2);
h2.append("I am a div 2")

let para2=document.createElement("p");
div2.appendChild(para2);
para2.append("Me too!")


