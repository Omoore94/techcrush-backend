// A FUNCTION IS A BLOCK OF CODE THAT PERFORMS SPECIFIC ACTION
// function declaration. 
// function functionName(){
//      code to be executed
// }

function greet(){
    console.log("Welcome back, Mr. Paul")
};

greet();  //you must call a function before it can perform the assigned action. 


//parameter -> expected values OR variable name
//argument -> the actual values OR value
function farewell(name){ //name here is a parameter
    console.log("see you again, " + name)
}

farewell("Amarachi"); //Amarachi here is an argument. 



// functions with numbers

//there two types of functions: static and dynamic. 
// the result from a static function is always the same. 
// the result from a dynamic function will always change based on the arguement parsed. 
let x = 5;
let y = 10;
console.log(x + y);

function add(){
    let a = 5
    let b = 10
    console.log(a)
    console.log(b)
    return a + b
    
    //return key word is use to return values from a function. The return must be the last line of a function.

}
console.log(add());

//if there's no return statement in your function, there's no need to call your "console.log" outside the function

function addition(a, b){
    return a + b
}
console.log(addition(2, 3));

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20));
