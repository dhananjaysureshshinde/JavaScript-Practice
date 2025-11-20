//This program helps you understand concatenation and interpolation.

//Below program demostrate the concept of concatenation.
//With the help of concatenation you can merge data all together. Ex: Strings.
let price = 27;
let productName = "Keyboard";
let message = "Name of the product is "+productName+" and price is "+price+" dollars.";
console.log(message);
console.log("");

//Interpolation is similar to concatenation with different syntax. Backtick is used to denote interpolation.
//Interpolation ios also known as "Template Literals".
let studentName = "Dhananjay";
let standard = "7th";
message = `Name of the student is ${studentName} who is in ${standard} standard.`;
console.log(message);
console.log("");

//String manipulation techniques.Strings can be enclosed with single or double quotes.
//name.length prints the length of the string.
console.log(studentName.length);
console.log("");

//Printing the characters available inside the string.
console.log(studentName[6]);
console.log("");

//Escape sequence character \'. Used to avoid confusion when inverted comma is used inside the string.
//Specifically used when single/double  inverted comma is used inside the defined variable.
//\n = New line.
//\t = Tab.
//\r = Carrige return.
studentName = 'Adam D\' Angelo';
console.log(studentName);
console.log("");
studentName = "Dhananjay Suresh \n Shinde";
console.log(studentName);
console.log("");
studentName = "Garima Omprakash \t Bharti";
console.log(studentName);
console.log("");
studentName = "Nityanand  Playwright \r Bhosle";
console.log(studentName);
console.log("");

//Advanced string manipulation techniques.
//toUpperCase() function converts strings characters to uppercase.
//If the characters are already in uppercase, no error will be thrown and characters will remain as it is.
studentName = "dhananjay";
console.log(studentName.toUpperCase());
console.log("");

//toLowerCase() function converts strings characters to lowercase.
//If the characters are already in lowercase, no error will be thrown and characters will remain as it is.
studentName = "NITYANAND";
console.log(studentName.toLowerCase());
console.log("");

//name.slice() function helps print specific portion of the string.
//name.slice(3,7) will start printing characters from the 4th letter till 6th letter. 7th letter is not included.
studentName = "Dhananjay";
console.log(studentName.slice(3,7));
console.log("");

//name.slice(3) function should print all the remaining characters of the string as the end is not defined.
//This happens when second argument is not defined.
studentName = "Dhananjay";
console.log(studentName.slice(3));
console.log("");

//.replace("X", "Y") replaces characters mentioned in the string.
//First string mentioned is case sensitive. Means it should match as it is with the string declared.
studentName = "Dhananjay Shinde";
console.log(studentName.replace("Shinde", "Sindhia"));
console.log("");

//concat() helps join strings.
firstName = "Dhananjay";
lastName = "Shinde";
console.log(firstName.concat(lastName));
console.log(firstName.concat(" has a surname ",lastName," which is well known"));
console.log("");

//.trim() function helps remove whitespaces mentioned in the string, leading and trailing as well. Not in between.
studentName = "   Dhananjay   "
console.log(studentName);
console.log(studentName.trim());
console.log("");

















