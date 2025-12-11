//This program demonstrate the use of Objects and Arrays.

//Objects : A key value pair which behaves like a dictionary. Information is stored in Key Value pair.
//Below is the example of object declaration.

let customer = {
    firstName : "Garima",
    middleName : "Omprakash",
    lastName : "Bharti",
    age : 32,
    sex : "Female"
}
console.log(customer.lastName);
console.log(customer.firstName, customer.sex);
console.log(customer.firstName.concat(" ",customer.lastName));

//Another method to access the data through []
console.log(customer["middleName"]);

//Redeclaring the values stored inside the object.
customer.firstName = "Dhananjay";
customer["middleName"] = "Suresh";
customer.lastName = "Shinde";
console.log(`${customer.firstName} ${customer.lastName}`);
console.log("");


//Array declared inside the object and values being fetched through for loop
let qaTeam = {
    names : ["Dhananjay","Garima","Nityanand","Sanket"],
    surname : ["Shinde","Bharti","Bhosle","Avasare"],
    designation : ["Quality Analyst","Quality Analyst","QA(Automation)","Jr.Quality Analyst"],
    age : [34,32,28,28]
}
for (i = 0; i<qaTeam.names.length; i++)
{
    console.log(`Name of the Employee : ${qaTeam.names[i]} \n Surname : ${qaTeam.surname[i]} \n Department :${qaTeam.designation[i]}, \n Age :${qaTeam.age[i]}\n`);
    
}
console.log("\n");


// Arrays in Javascript :
//Array Declaration : 
let carBrand = ["BMW","Mercedese","Porsche","Volkswagon"];
console.log(carBrand[2]);
carBrand[3] = "Skoda";
console.log(carBrand[3]);
for(let i = 0; i<carBrand.length; i++)
{
    console.log(carBrand[i]);
    
}
console.log("\n");


let graduationSubject = ["History", "Psychology", "Maths", "Chemistry", "Geography"];
console.log(graduationSubject[3]);
for(i = 0; i<graduationSubject.length; i++)
{
    console.log(graduationSubject[i]);
}
console.log("");

//Printing the array values without the for loop.
console.log(graduationSubject);
console.log("");

//length of the array.
console.log(graduationSubject.length);
console.log("");

//Adding a new value to the array to a perticular position.
graduationSubject[2] = "Science";
console.log(graduationSubject);
console.log("");


//Type of an array which can be printed.
console.log(typeof graduationSubject);
console.log("");

//Array methods to ease out your work.
//toString() method turns your array into the string.
let num = [1, 2, 3, 4];
//Initial type of an array is object.
console.log(typeof num);
let convertToString = num.toString();
//Type of the array is now changed to string.
console.log(convertToString);
console.log(typeof convertToString);
console.log("");

//Join method joins the elements of an array using a separater.
//Type of array is then turned into string.Usually used when you want to format your array in certain way.
let c = num.join(" and ");
console.log(c);
console.log("");

//pop() method removes last element from the array.
//This can be achieved with the help of .pop() method. It returns the popped element from the array.
//Not the entire array.
let popped = num.pop();
console.log(popped);
console.log("");

//push() methods add an element to the array. It returns new array length.
//It add element at the end of the array.
//Remember it returns the new length of the array.
let pushed = num.push(4,5,6);
console.log(pushed);
//print newly modified array.
console.log(num);
console.log("");

//shift() method removes the very first element of an array.
console.log(num);
//use of the shift method. shift() methods provides removed element and not the entire array.
let shiftArray = num.shift(11);
console.log(shiftArray);
console.log(num);
console.log("");

//unshift() method undo the shift() method and adds element at the beginning og the array.
//unshiftt() method returns the length of an array.
let unShift = num.unshift(1);
console.log(unShift);
console.log(num);
console.log("");
console.log(num[0]);

//Note : push() and pop() methods adds and removes element from the end of an array. 
//shift() and unshift() adds and removes element from the beginning of an array.

//delete() method deletes the prposed element from the array.
//Array length remains same.
console.log(num);
delete num[2];
console.log(num);
console.log("");
console.log(num.length);

//Assigning value to the empty item.
num[2] = 3;
console.log(num);
console.log("");

//concat() method combines multiple array all together
let num2 = [11, 12, 13, 14, 15, 16, 17];
let num3 = [111, 112, 113, 114, 115, 116, 117];
let concatArray = num.concat(num2,num3);
console.log(concatArray);
console.log("");

//sort() method sorts array alphabetically.
let sortedArray = concatArray.sort();
console.log(sortedArray);
console.log("");

//compare function helps sort an array in correct order.
let compare = (a,b)=>{
    return a - b;
}
sortedArray = concatArray.sort(compare)
console.log(sortedArray);
console.log("");

//reverse() function reverses the array
let reverseArray = sortedArray.reverse();
console.log(reverseArray);
console.log("");

//splice() method helps you insert number of elements at desired positions.
//splice(3,2,101,102) means insert 2 elements 101 and 102 starting from 3rd position in an array.
//splice() method returns extracted/removed elements of an array.
console.log(num3);
let spliceFunction = num3.splice(3,2,101,102);
console.log(num3);;
console.log(spliceFunction);
console.log("");

//For loop in the combination of an array.
//Manipulate array using for loop using length method.
//Array manipulation using foreach() method.
let newArray = [1, 2, 3, 4];
newArray.forEach((numbers)=>{
  console.log(numbers*numbers);
    
})



