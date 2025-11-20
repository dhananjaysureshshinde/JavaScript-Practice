 //A javascript program demonstrating the use of Variables, Data Types and Constants.
 //Variable Declaration.
 
 var firstName = "Dhananjay";
 var lastName  = "Shinde";
 console.log(lastName +" "+ firstName);
 console.log("");

 //Variable values can be replaced inside the program.
 //Variables declared as "var" can be redeclared and reused. Below program has age defined and redeclared twice.
 
 var age = 4;
 console.log(age);
 var age = 10;
 console.log(age);
 console.log("");

 //Use of let keyword in the program. One should use let over var keyword.
 //Variables declared as "let" can be reused but cannot be redeclared. 
 //Scope is only limited to the code block and not globaal.
 
 let myAge = 6;
 console.log(myAge);
 myAge = 12;
 console.log(myAge);
 console.log("");

 //Program to demonstrate block scoped let
 let myName = "Dhananjay"
 {
    let myName = "Nityanand"
    console.log(myName);
 }
 console.log(myName);
 console.log("");

 //Constants can be declared once and their values cannot be reused or redeclared. Their values cannot be changed.
 //Ideally values should be declared as a const if you think value is not going to change.
 
 const pi = 3.14;
 console.log(pi);
 console.log("");


 //Data types can be catogorised as a String, Symbol, Number, Null, BigInt, Boolean and Undefined.
 //Below mentioned code has every data type declared.
 //There aree two types of data types in Javascript.
 //1.Primitive Datatype : Number, Null, Symbol, String, Boolean, BigInt, Undefined
 //2.Non Primitive Data types : Objects(Key Value Pair) and Arrays.
 
 let validAge = 18; //Number as a data type.
 let address = null; // Null as a data type
 let customerName = "Garima"; //String as a data type.
 let isAlive = true;// Boolean as a data type
 let marritialStatus = undefined; // Undefined as a data type.
 let bigNumber = BigInt(2345678456);
 let mySymbol = Symbol("This if for Symbol")
 console.log(validAge);
 console.log(address);
 console.log(customerName);
 console.log(isAlive);
 console.log(marritialStatus);
 console.log(bigNumber);
 console.log(mySymbol);
 console.log("");
 console.log(typeof validAge);
 console.log(typeof address);
 console.log(typeof customerName);
 console.log(typeof isAlive);
 console.log(typeof marritialStatus);
 console.log(typeof bigNumber);
 console.log(typeof mySymbol);
 console.log("");

 //Object declaration : Objects are always declared in key value pair combination. 
 //It's a sort of dictionary.
 //When non existent item is called it returns undefined as the object is not available.
 let namesAndAge = {
    Dhananjay : 34,
    Garima : 32,
    Nityanand : 27,
    Sanket : 28
 }
 console.log(namesAndAge["Garima"]);
 console.log(namesAndAge["Nityanand"]);
 console.log("");
 