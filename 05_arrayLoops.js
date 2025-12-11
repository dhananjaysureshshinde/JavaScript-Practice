//This program demonstrate the use of Array in combination of loops.

//Declared object and spinning of the value through for loop.
let qaTeam = {
    names : ["Garima", "Dhananjay", "Sanket", "Nityanand"],
    surName : ["Bharti", "Shinde", "Avasare", "Bhosale"],
    designation : ["Analyst", "Analyst", "jr.Analyst", "SDET"],
    age : [32, 33, 28, 27]
}
for(let i = 0; i < qaTeam.names.length; i++)
{
    console.log(`Name : ${qaTeam.names[i]} , Surname : ${qaTeam.surName[i]} , Designation : ${qaTeam.designation[i]} , Age : ${qaTeam.age[i]}`);
}
console.log("");


//Declaring an array and printing the values using for loop.
let array = [1 , "Issue", 12.4, "Dhananjay"]; 
for( i = 0; i < array.length ; i++)
{
    console.log(array[i]);
}
console.log("");


//Simple program for the For Each loop.
let numArray = [2, 5, 76, 85, 34];
numArray.forEach((number) => {
    console.log(number*number);
})
console.log("");

//Forming an array using Array.from() method.
//Converts given string or collection into an array.
let firstName = "Dhananjay";
let formedArray = Array.from(firstName);
console.log(formedArray);
formedArray[8] = "i";
console.log(formedArray);
console.log("");

//for...of loop is the shortcut to access the elements of an array.
//No need to write down conventional loop method.
console.log("Array printed using for...of loop");
numArray = [1, 2, 3, 4];
for(let i of numArray)
{
    console.log(i);
}
console.log("");
for(let j in numArray)
{
    console.log(j);
    
}
console.log("");


/*MAP, REDUCE and FILTER in arrays*/
//map is mostly used when you need to create a new array from the existing array. It creates a new array by performing operation on new array.
//You can also carry out operations on the new array as per your liking, such as adding/ manipulating the existing array.
//You can parse values like array value, index and entire array.
let arr = [11, 12, 13, 14];
console.log(arr);
let newArr = arr.map((newArray, arrayIndex, ActualArray)=>{
        console.log(newArray + 1, arrayIndex, ActualArray);    
})
console.log(newArr);
console.log("");

//map to manipulate an array of string.
let numOne = ["One", "Two", "Three"];
let numTwo = numOne.map((manipulate) => {
    return manipulate + "Hi";      //A new string has been introduced to the existing array.
})
console.log(numTwo);
console.log("");

//FILTER Method.
//Purpose is to filter the values of an array based on your conditions.
//It also creates a new array based on your filters.
let bigArray = [11, 12, 13, 14, 21, 22, 23, 24];
let filterArray = bigArray.filter((value) =>{
    return value < 20;    //returns values which are less than 20 from the bigArray array.
})
console.log("Actual array is : " +bigArray);
console.log("Filtered array is : " +filterArray);
console.log("");

//Reduce Method
//Objective of reduce method is to flatten the array. I can perform an operation on an array and create a new array that has the single value assigned to it.
//For below array I can create a new array that has the sum of all the elements of an array.
let newArray = [1,2,3,4];
let reducedArray = newArray.reduce((value1, value2) => {
    return value1 * value2; // Multiply all the elements of the array and reduce it to the single value
})
console.log("This is the original array : " +newArray);
console.log("This is the recduced array :"+reducedArray);





