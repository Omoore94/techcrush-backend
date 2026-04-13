//STRINGs METHOD CONTD.

let sayHello = "My name is Esther!"
let slicedHello = sayHello.slice(-6);
let substringString = sayHello.substring(-6,2);
console.log(slicedHello);
console.log(substringString);


//replace() and replaceAll()
//replace only changes the first match it finds, while replaceAll replaces all matches. 
// let textString = "My name is Paul, I am going to school to read my books";
// let replacedStrings = textString.replace("books", "novel");
// let allReplacedString = textString.replaceAll("to", "2");
// console.log(replacedStrings);
// console.log(allReplacedString);

// let text = "Paul is a fine boy. Paul is a very kind, Paul loves listening to rap";
// let replacedText = text.replace("Paul", "He");
// let replacedAllText = text.replaceAll("Paul", "He");;

// console.log(replacedText);
// console.log(replacedAllText);

//split() = > would seperate a string (or sequence of characters) into an ARRAY of smaller strings based on the specified seperator. 
//the return type for the split method is an ARRAY/OBJECT. 
//the split method takes in a string (or separator) as it's parameter. This is unlike the slice() that takes in a number. 
// a separator can be anything/string => comma, string, semi-colon, empty string, hyphen, etc.
//it's usually better to split the string with a common seperator. If you seperate by a separator that is not in the string, it will automatically return back the original string as it is.
// let sent = "Femi, Paul, Yemi, Amarachi, Nonso, Ejike";
// let splitSent = sent.split(","); //go thru the string above and seperate it by comma(,)
// console.log(splitSent);
// console.log(typeof splitSent);

//splitSent = sent.split("") ==> seperating by empty string seperates each alphabet one after the other. 





//STRINGs PROPERTIES & METHOD.
//strings method => length(), trim(), case(), indexOf(), includes(), slice()

//Strings, like all primitive data types are immutable (cannot be changed), but can be manipulated. 
//Strings methods are ways of manipulating the characters of a sequence of strings. 
//the .length property(not a method) of a string returns the number of characters in the string. 
// thus, .length returns number data-type.
//the length property starts counting from 1.


//.LENGTH PROPERTY
// dot(.) is used to call out property or method. Methods have () at the end of the method name.
let stringText = "This is a class on strings methods";
let stringLength = stringText.length;
console.log(stringLength);

//NOTE: The .length property returns the number of 'entities' in an array/object.
let arr = ["Amarachi", "Paul", "Ifeoma", "Uju", "Faith"];
let arrLength = arr.length;
console.log(arrLength);  //returns 5, as there are 5 entities in the arr above.
//console.log(typeof arr);  => retursn object as an array is a type of object.

//.toUpperCase() and .toLowerCase()
//These two methods change the case of strings or sequence of strings. 
//they are use to format, clear and clean user inputs. 

let str = "this is the best day of my life!";
let capitalStr = str.toUpperCase();
let smallStr = str.toLowerCase();

console.log(smallStr);
console.log(capitalStr);


//trim() ==> trims all white spaces before and after the string. 
//trimStart() ==> trims off all white spaces before the string.
//trimEnd() ==> trims off all white space at the end of a string. 

// let sent = "    this is the day that the lord has made       ";
// let jusTrim = sent.trim();
// let trimStartSent = sent.trimStart();
// let trimEndSent = sent.trimEnd();

// console.log(jusTrim);
// console.log(trimEndSent);
// console.log(trimStartSent);

// let SignUpName = " Paul";
// let signInName = "Paul";
// if (SignUpName.trim() === signInName){
//     console.log("Welcome to our page!, " + signInName)
// }else {
//     console.log("Invalid user name, please try again!")
// };


//indexOf() and includes()
//These methods are both called the search-method. 
//indexOf() is used to locate the position/index of a character or entitiy in a string/array
//indexOf() takes in a string as a parameter and returns the position(number) of that parameter in the
//the indexOf() starts counting from 0.
//the indexOf() will return -1 if the character/entity being searched for does not exist in the string/array. 
// let email = "omoh.afekhume1@gmail.com";
// let emailIndex = email.indexOf("@");
// console.log(emailIndex);

//includes()
//this is used to check if a character/entity is in a sequence of string/array. 
//includes() return boolean (true or false) if a character is in a string/an array.
// let email_include = email.includes(".com");
// console.log(email_include);
// console.log(email.indexOf("ada")); //returns -1 because "ada" doesnt exist in the string

//startsWith() and endsWith()
//The startswith( ) and endsWith() checks if a sequence of string starts or ends with a character.

// let stat = "The weak shall inherit the dirt";
// let startStat = stat.startsWith("The");
// let endStat = stat.endsWith("yam");
// console.log(startStat);
// console.log(endStat);


//CONTROL FLOWS
//There are three types of control flows
//1. conditional, the loops and functions. 
//for conditionals, we have the IF, ELSE-IF AND SWITTCH
//for loops, we have the FOR, WHILE LOOPS. 
//By default Js reads your cods from top-bottom (line by line)

//1. Conditionals => They run certain codes ONLY when a condition is true. (eg, if-else, else-if, switch)
//2. Loops => Run the same codes a specific number of time (iteration) (eg, for, while and for-of loops)
//3. Functions => A block of code that performs a specific action. 

//the four (4) building blocks of control flows;
//1. initial state, 2. condition, 3. statement/action, 4. update {ICSU}


//IF-ELSE STATEMENTS => If only runs IF the condition is true, else runs ONLY if the IF condition is false. 
let userAge = 21;
let userName = "Daniel";;
if (userAge >= 18){
    console.log("Welcome to club naija, " +userName)
}else {
    console.log("Sorry, you are not allow in this club")
};

//else-if statements => ELSE-IF helps us attach more condition to the if-else statement
//
let gender = "female";
if (gender === "female") {  //if takes condtion
    console.log("Welcome to the female restroom")
}else if (gender === "male") { //else if takes condition
    console.log("Welcome to male restroom")
}else if (gender === "other") { //else if takes condition
    console.log("Welcome to the other section")
}else {  //else does not take condition
    console.log("Please specify your gender")
};

//LOGICAL OPERATORS.
// && => AND operator. 
// || ==> OR operator. 
// ! => NOT operator
let username = "paulomoh";
let password = "password1234";
if (username === "paulomoh" && password === "password1234") {
    console.log("Login successful")
} else if (username === "paulomoh" || password === "password1234") {
    console.log("Password or username is incorrect, please try again!")
}else {
    console.log("Login in failed.")
};

let electionAge = 16;
let nationality = "Nigerian";

if (electionAge >= 18 && nationality === "Nigerian") {
    console.log("Please vote for your favorite candidate")
}else if (electionAge >= 18 || nationality != "Nigerian") {
    console.log("Please, check your age and/or country of birth")
}else {
    console.log("You are not eligible to vote, try again next year!")
};

// function welcome(age, name){
//     if(age >= 18) {
//         console.log("Welcome bro, " +name)
//     }else{
//         console.log("Not welcome")
//     }
// };
// console.log(welcome(18, "Daniel"));

//FOR LOOP => A  for loop keep iterating until the condition specified becomes false.
// for ( i = 2; i < 5; ) {
//     console.log(i)
//     i++
// };

for ( i = 2; i < 20; i+=4 ) {
    console.log(i)
};


//WHILE LOOP => A while loop continues to run as long as the condition is TRUE.
//The difference between for and while is that for while loop is used when we don't know how many times we want a particular action to be repeated. 

//increment
// let tries = 0;  //initial state
// while (tries < 3) {  //condition
//     console.log(tries + 1)  //action to perform OR statement
//     tries++   //update
// };

// //count down
// let count = 3;
// while (count > 0){
//     console.log(count)
//     count--  //JS does not break out of while loop scripts UNTIL the condition becomes false, so if this is moved outside the {}, it will become an infinite loop. 
// };


//FUNCTION
//A function () is a block of code that performs a specific action.
//syntax 
//function functionName ( ) {
    //code to execute or action to perform. 
//}

// function greetUser( ) {
//     console.log("Hello, World")
// };

// greetUser(); //a function is used by calling the function name

// //function with parameter and argument.
// function farewell(name) { // => parameter (name) is/are expected value (variable name)
//     console.log("See you soon, " + name)
// }

// farewell("Paul");  //argument => actual value.

//there are two types of functions
//static function and dynamic function. 
//the result from a static function is ALWAYS the same, while dynamic function's result/output changes based on the argument specified. 

//static function
function add( ){
    let x = 5;
    let y = 10;
    return x + y;
}
console.log(add());

//dynamic function
function addition(u, v){  //thus parameters in JS functions do not need to be declared.
    return u + v
};
console.log(addition(7, 100)); //result differs based on the arguments parsed.