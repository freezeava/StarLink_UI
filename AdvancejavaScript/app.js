// Concept-1

// let headCh1=document.all[8].innerText="Tony Stark";
// console.log(headCh1);


// let headch2=document.all[10].innerText="Myself";
// console.log(headch2);



// Selecting Element: selectElementById,ByClass,ByTagName
// let idConc=document.getElementById("mainImg");
// console.log(idConc);
// let classConc=document.getElementsByClassName("boxLink");
// console.log(classConc);
// let tagConc=document.getElementsByTagName("p"); //h1
// console.log(tagConc);


// idConc.src="assets/creation_1.png";


// for(let i=0;i<classConc.length;i++){
    
//     console.dir(classConc[i].text="Computer science");
//     console.log(`value of text ${i}`)

// }


// tagConc[1].innerText="Aashish Vidyarthi";
// // console.log(tagConc[0]);


// Revision

// let headOne=document.all[8].innerText="Shree Radhika Rani";
// console.log(headOne);

// let changerOne=document.getElementById("mainImg");
// changerOne.src="assets/creation_1.png";

// let changerTwo=document.getElementsByClassName("oldImg");

// for(let i=0;i<changerTwo.length;i++){

//     changerTwo[i].src="assets/creation_1.png";

// }


// let tname=document.getElementsByTagName("p");

// console.log(tname[0].innerText="Aashish Vidyarthi");





// Document.quesrySelertor();  ,Document.quesrySelertorAll();

// let para=document.querySelector("p");
// console.log(para);

// para.innerText="Aashish Vidyarthi";
// para.innerHTML="<u><em>Aashish Vidyarthi</em></u>";

// para.innerHTML=`<u>${para.innerText}</u>`;


// let imgAtt=document.querySelector("img");
// console.dir(imgAtt);

// imgAtt.getAttribute("id");
// console.log(imgAtt.getAttribute("id"));


// imgAtt.setAttribute("id","disco");
// console.log(imgAtt.getAttribute("id"))



// console.log(imgAtt.getAttribute("class"));

// console.log(imgAtt.setAttribute("class","paanmasla"));


// let paa=document.querySelector("p");
// console.log(paa);


// console.log(paa.getAttribute("id"));

// paa.setAttribute("id","golmal");
// console.log(paa.getAttribute("id"));

// let anch=document.querySelector("a");
// console.log(anch.getAttribute("id"));
// anch.setAttribute("id","pagalpanti");
// console.log(anch.getAttribute("id"));


// let pics=document.querySelector("img");
// console.log(pics);

// console.log(pics.getAttribute("src"));
// console.log(pics.setAttribute("src","assets/creation_1.png"))

// practice Question


// let newp=document.createElement('p');
// console.dir(newp);
// newp.innerText="Hey I am red!";


// let body=document.querySelector('body');

// body.appendChild(newp);

// newp.style.color="red";


// let newh3=document.createElement("h3");
// console.dir(newh3);
// body.appendChild(newh3);


// newh3.innerText=" I'm a blue h3";

// newh3.style.color="blue";


// let newdiv=document.createElement("div");

// console.dir(newdiv);

// body.appendChild(newdiv);
// newdiv.style.border="2px solid black";
// newdiv.style.backgroundColor="pink"

// newdiv.insertAdjacentElement("afterbegin","h1");
// let data=Document.querySelector("div h1");
// newdiv.appendChild(data);
// data.innerText="I am in a div";

// Review