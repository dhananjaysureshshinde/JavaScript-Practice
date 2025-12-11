//This file uses the functions and its implementation in JavaScript.
//function is a separation of logic mostly to avoid repetative task.
//Function to add two basic numbers.
//You need to invoke the fuction in order to fetch the value.
function addition(num1, num2) {
    let calculation = num1 + num2;
    return calculation;
}
console.log(`Addition of both the number is : ${addition(2,6)}`);
console.log("");

//Another way to return the value is as follows.
function addition(num1, num2) {
    return num1+num2;       //No need to declare variables as return simply returns thge value of calculation.
}
console.log(`Addition of both the number is : ${addition(12,16)}`);
console.log("");

//Arrow function. Should be preferred over usual function
let avarage = (a, b)=>{
    return (a+b)/2;
}
console.log(`Avarage as per the arrow function is : ${avarage(12,14)}`);

