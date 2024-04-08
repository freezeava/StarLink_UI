let str=" hell o  ";
console.log(str.toUpperCase().trim()); //"hell o";


let str1="ILoveCoding";

console.log(str1.indexOf("Love"));//1
console.log(str1.indexOf('I'));//0
console.log(str1.indexOf("ove"));//2
console.log(str1.indexOf("code"));//-1


//slice Method


let fruits="MangoOrangeBanana";

console.log(fruits.slice(5));
console.log(fruits.slice(5,11));
console.log(fruits.slice(11,17));
console.log(fruits.slice(2,5));

//Replace
console.log(fruits.replace("Mango","grapes")); //grapesOrangeBanana

//repeat

console.log(fruits.repeat(3));//MangoOrangeBananaMangoOrangeBananaMangoOrangeBanana


