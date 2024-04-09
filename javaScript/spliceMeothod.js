let colours=["Yellow","Orange","Pink","Red","violet","Purple","raddish","olive"];

console.log(colours.splice(6));//"raddish","olive"

console.log(colours);//"Yellow","Orange","Pink","Red","violet","Purple"

console.log(colours.splice(2,3))//"Pink","Red","violet"

console.log(colours);//"Yellow","Orange","Purple"

console.log(colours.splice(1,2,"lavendra","brown"));//"Yellow","lavendra","brown","Purple"

console.log(colours);//"Yellow","lavendra","brown";


//sort an array
let ColSo=["Yellow","Orange","Pink","Red","violet","Purple","raddish","olive"];

console.log(ColSo.sort());