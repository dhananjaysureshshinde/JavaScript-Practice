//This program demonstrate the use of operators and conditional operators.
//below is the program diffrentiating between them.

//1: Arithmatic Operators
let a = 10;
let b = 5;
console.log("Arithmatic Operators :");

console.log(`Addition of A : ${a} and B : ${b} is :`, a+b); // Addition Operator
console.log(`Subtraction of A : ${a} and B : ${b} is :`, a-b); // Subtraction Operator
console.log(`Multiplication of A : ${a} and B : ${b} is :`, a*b); // Multiplication Operator
console.log(`Division of A : ${a} and B : ${b} is :`, a/b); // Division Operator
console.log(`Modulus of A : ${a} and B : ${b} is :`, a%b); // Modulus Operator
console.log(`Exponentiation of A : ${a} and B : ${b} is :`, a**b); // Exponentiation Operator
console.log(`Pre-Increment of A : ${a} is :`, a++); // Pre-Increment Operator
console.log(`Pre-Decrement of A : ${a} is :`, a--); // Pre-Decrement Operator
console.log(`Post-Increment of A : ${a} is :`, ++a); // Post-Increment Operator
console.log(`Post-Decrement of A : ${a} is :`, --a); // Post-Decrement Operator
console.log("");


//Comparison Operators:
console.log("Comparison Operators :");
console.log(`${a} is greater than ${b} :`,a>b); //Greater than operator
console.log(`${a} is less than ${b} :`,a<b); //Less than operator
console.log(`${a} is greater than or equal to ${b} :`,a>=b); // Greater than or equal to operator.
console.log(`${a} is less than or equal to ${b} :`,a<=b); // Less than or equal to operator.
console.log(`${a} is equal equal to ${b} :`,a==b); //Equal Equal Operator/ Loose comparison operator
console.log(`${a} strictly equal to ${b} :`,a===b); //Strictly equal to operator.
console.log(`${a} is not equal to ${b} :`,a!=b); //Not equal to operator.
console.log(`${a} is strictly not equal to ${b} :`,a!==b); //Strictly not equal to operator.
console.log("");

//Assignment Operator :
console.log("Assignment Operators");
console.log(`a is equal to b :`, a = b); // a is equal to b.
console.log(`a is equal to a + b :`, a+=b); // a is equal to a+b.
console.log(`a is equal to a - b :`, a-=b); // a is equal to a-b.
console.log(`a is equal to a * b :`, a*=b); // a is equal to a*b.
console.log(`a is equal to a / b :`, a/=b); // a is equal to a/b.
console.log(`a is equalal to a % b :`,a%=b); // a is equal to a%b.
console.log(`a is equalal to a ** b :`,a**=b); // a is equal to a**b.
console.log("");

//Logical Operators:
console.log("Logical Operators :");
a = 5;
b = 7;
c = 7;
console.log(`a is equal to b && b is equal to c :`, a==b && b==c); // And And operator.
console.log(`a is equal to b || b is equal to c :`, a==b || b==c); // Or Or operator.
console.log(`Opposite of b equal to c :`, !(b==c)); // Not operator.
console.log("");


