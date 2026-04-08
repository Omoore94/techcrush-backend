// CONTROL FLOW
// There are three (3) types of control flow. 
// 1. conditionals. 2. Loops. 3. Functions.

// CONDITIONALS => if/else and switch
// LOOPS => for, while, for, of. 
// FUNCTIONS => a block of code that runs a particular action. 


// if-else statement:IF block runs only if condition is true, ELSE block runs if condition is false (not true)
// if (condition) {
//         (action)
// }else {
//     (actions)
// }

// club entry task
let userAge = 21;
if (userAge >= 18){
    console.log("Welcome to club naija")
} else {
    console.log("Sorry this club is not for you!")
};

// else-if
// the else-if helps to throw in more conditions. It takes in a conditon, just like the IF block.
// we can only have 1 if, multiple else-if and else statement. 
// else statement runs if the IF and ELSE-IF statement is not true. 


// toilet entry task
let gender = "female";

if (gender == "female"){
    console.log("Welcome to the female section")
}else if (gender == "male"){
    console.log("Welcome to the male section")
}else if (gender == "other"){
    console.log("Welcome to the other section")
}else {
    console.log("We dont know where you belong")
};


// log in task
// && (AND OPERATOR) => both condition MUST be true
// || (OR OPERATOR) => any of the condition can be true.
let username = "Paul";
let password = "password123";

if(username == "Paul" && password == "password123") {
    console.log("Welcome, log in successful")
}else if (username == "Paul" || password == "password123"){
    console.log("username or password is correct")
}else {
    console.log("login failed")
};


//election voting task. 
let votersAge = 18;

if(votersAge >= 18){
    console.log("You are eligible for voting")
}else{
    console.log("Sorry, You are not eligible to vote")
};



// LOOPS
// FOR LOOPS: A for loop repeats a block of code a specific number of time. Instead of copy pasting the same line 100 times. 
// you write it once inside a loop. 
// FOR LOOP SYNTAX
// for(start ; condition ; update){
//     code to repeat/action.
// }

for(let i = 0; i<10; i++){
    console.log(i)
};

let arrayOfNames = ["Paul", "Adina", "John", "Doe", "Amarachi"]
console.log(arrayOfNames.length)
//array.length returns the number of values/character in an array

for(let names = 0; names < arrayOfNames.length; names++){
    console.log(arrayOfNames[names])
};


for (let greetings = 0; greetings < 3; greetings++ ){
    console.log("Hello, World!")
};


for (let x = 2; x<=26; x *= 2){
    console.log(x)
};



// WHILE LOOP -> A while loop keeps running as long as it's condition. 
// Use it when you do not know in advancd how many times you need to repeat. 
// increment while loop
let tries = 0;
while(tries < 3){
    console.log(tries + 1)
    tries++
};

// decrement while loop.
let count = 3;
while (count > 0){
    console.log(count)
    count--
};


// SWITCH: 