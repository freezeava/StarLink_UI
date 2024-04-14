function sum(a, b){
    return a+b;


}


let a=parseInt(prompt("enter a:"));
let b=parseInt(prompt("Enter b:"));



console.log(sum(a,b));




//dice 1 t0 6 function


function dice(){
    console.log(Math.floor(Math.random()*6)+1);
}

dice();

//sum of  number function from 1 to n
function sumOfn(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}


console.log(sumOfn(8));