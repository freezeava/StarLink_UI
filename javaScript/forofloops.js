let heros=["ironman","CaptainAmerica","Invisiable","Hulk","batman"];


for(hero of heros){
    console.log(hero);
}

let vowels="aeiou"

for(vowel of vowels){
    console.log(vowel);
}

//nested for of loop


let actress=[["ironman","CaptainAmerica","Invisiable","Hulk","batman"],["wonderwomen","superman","spiderman","HarryPotter","Shakitman"]];

for(actor of actress){
    for(individual of actor){
        console.log(individual);
    }
}