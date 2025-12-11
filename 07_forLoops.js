//This file demonstrate the use of for loops.
//Below program defines wide range of for loops and their use.
//Print first 10 natural numbers and add them all together.
let sum = 0;
for(let i = 1; i <= 10; i++)
{
    sum += i;
}
console.log(`final sum is ${sum}`);
console.log("");

//Program for the factorial of a number
let factorial = 1;
for( i = 1; i<=5; i++)
{
    factorial*=i;
}
console.log("Factorial of a number is : "+factorial);
console.log("");

//for...in loop. It mostly iterates the values of an object.
//Below mentioned program demonstrate the use of for...in loop
//Mostly used with Objects in JavaScript.
let qaTeam = {
    names : ["Dhananjay","Garima","Nityanand","Sanket"],
    surname : ["Shinde","Bharti","Bhosle","Avasare"],
    designation : ["Quality Analyst","Quality Analyst","QA(Automation)","Jr.Quality Analyst"],
    age : [34,32,28,28]
}
for(let info in qaTeam)
{
    console.log(info + " : " +qaTeam[info] );
    
}

//Use of for...of loop. It iterates over the values of an iterable object (like arrays, strings, Sets, Maps, etc.)
//Use for…of when you want actual values from an iterable like an array, string, or Set.
//Below mentioned program demonstrate the use of for...of loop.
let str = "Dhananjay";
for(let arr of str)
{
    console.log(arr);
    
}
console.log("");

//for..each loop.
arr = [1, 2, 3, 4];
arr.forEach(square => {
    let mult = square*square;
    console.log(mult);
});