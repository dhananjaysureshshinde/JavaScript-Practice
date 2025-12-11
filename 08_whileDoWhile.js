//This file explains the use of while and Do while loops.
//If the condition never becomes false, it might crash the runtime program.

let number = 10;
let i = 1;
let sum = 0;
while (i <= number) 
{
    console.log(i);
    sum+=i;
    i++; 

}
console.log("Total sum of the numbers is : "+sum);
console.log("");

//Do...While loop.Do...While Loops executes atleast ones even if the condition is not satisfied. 
//While program to print first ten natura numbers along with their sum using do while loop.
//In Do...While loop first block runs and then condition is checked.
console.log("Do...While loop in action :");

let num = 10;
let j = 1;
let sums = 0;
do 
{
    console.log(j); //Print value of j in incremental order
    sums+=j; //Addition of incremented j value.
    j++; //Increment the value of j.
} while (j <= num);
console.log(sums); //Print the final addition of numbers.
console.log("");

