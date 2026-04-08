//NUMBERS IN JAVASCRIPT and their METHODS. 
//Javascript stores all types of numbers (whole/integer, decimal/float, negative, large, small) as NUMBER. There's no difference. 
let int = 50;
let decimal = 42.88;
let bigNum = 2275473756967434;
let smallNum = 0.00002;
let negNum = -2.34;

console.log(typeof decimal);
console.log(typeof int);
console.log(typeof bigNum);
console.log(typeof smallNum);
console.log(typeof negNum);

//SPECIAL NUMBERs => NaN, Infinity, -Infinity
//NaN is returned as the result of a bad maths, eg. strings * number. .... "abc" * 2 returns NaN as string is Not A Number (NaN)


//FLOATS HANDLING AND DECIMAL PLACD ROUNDING. 
let a = 0.1;
let b = 0.2;
let c = a + b;

console.log(c); //returns 0.30000000000004 instead of 0.3
//1. use toFixed() to round the decimals/floats. 
console.log(c.toFixed(2));  //rounds down to 2 decimal places. 

//2. Precision() => controls the TOTAL number of signifants digits, not just the decimals. 

let num = 143.6672
let precisedNum = num.toPrecision(5);  //ensures total number of significants digits is 5. (decimal inclusive)
console.log(precisedNum);

//ParseInt(), parseFloat() and Number()
//This is used to convert received data/strings into actual numbers, so arimthmetic operations can be done. 
//parseInt => converts received data into an INTEGER (whole number);
let text = "234a";
let age =  62

let mult = text * age //returns NaN as text is not a number. 
console.log(mult);
//however, we can overcome this challenge by parsing the text to Int. 
let newMult = parseInt(text) * age
console.log(newMult);

//number() => converts strictly.. no partial conversion
console.log(Number("100"));
console.log(Number("42ax"));
console.log(Number(true));
console.log(Number(false));


//isNaN() and isFinite()
//these functions helps check whether a value is valid, usable.
//they both return boolean
console.log(isNaN("Hello"));
console.log(isNaN(42));


//isFinite()
//returns true is value is real/finite and not infinity. 
console.log(isFinite(42));
console.log(isFinite(Infinity));


// MATHS OBJECT. 
//The maths object is built in JS toolboox.They are always available, you only need to import them.
console.log(Math.max(3, 8, 12, 16, 1));  //returns the max number.