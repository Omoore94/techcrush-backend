//What is an Array?
//An array is avaraiable that holds so many values at the same time. 
//It is enclosed in a sqaure bracker []
//The values in an array can be the same or of different data types.
//Each item/value in an array has an index position, starting from 0. 
// Items in an array are extracted/get by []... array[0]

let items = ["milk", "milo", "tea", "rice"];
console.log(items[0]); //returns the item in the index position 0

array_length = console.log(items.length);  //returns the total number of values in the array. 



//ARRAY METHODS : 1. HIGH ORDER ARRAY METHODS AND 2. ARRAY METHODS (ASSIGNMENT)
//Higher order array methods are function that take functions as their parameters. 

//1. forEach ==> runs a function once for every item in the array and performs an action without returning a new list/array 
//forEach is looping function that runs through the array and returns each individual element in an array, actions can thus be performed on this returned elements. 
let fruits = ["apple", "banana", "guava", "cucumber", "avocado"];
fruits.forEach(function(fruit){
    console.log("I ate " + fruit) //named fucntion
})


//2. map() => map create a NEW array by transforming each item in the original array. The original array is not changed. 
let scores = [90, 80, 70, 60, 50];
newScores = scores.map(score => score + 5)  //arrow function
console.log(newScores);
console.log(typeof newScores);  //new scores is still in an array, unlike the forEach method

//forEach prints each item out individually, map method returns the performed action in a new array
//when doing the arrow fucntion, one liner do not need curly bracket, however, if we are performing more than one -liner we need a curly bracket. 

let students = ["esther", "paul", "doe", "amara", "agbara"];
let name_tag = students.map(tag => {
    return "TECH_CRUSH_2026_COHORT_6 " + tag
})
console.log(name_tag);


//3. filter() method = > filter creates a NEW array containing only the items that pass a condition (that return true). Items. that fail the condition are left out. 
let jamb_scores = [45, 72, 38, 90, 55, 29, 88, 100];

//Keep omly scores that are 50 and above (passing scores)
let passed = jamb_scores.filter((score) => { //arrow function
    return score >= 50 //returns every score that is greater than 50
})

console.log(passed);


let ages = [12, 18, 22, 10, 7, 35, 19, 35];

let adults = ages.filter(function(age){  //named function

    return age >= 18
})
console.log(adults);

//reduce() => comibne all items in an array into a total value. Used to compress your arrays into a single value, mostly used for numbers.
let cartPrices = [1500, 800, 2200, 450, 1000];

let total = cartPrices.reduce(function (acc, currentPrices) {
    return acc * currentPrices;
}, 0); //acc, current value, initial value. 

console.log(total);

//push , pop,  shift, unshift. (normal array methods) => they do not take in function as a parameter. 
//push is used to add items to the end of an array. The return type for push is a number. The new length of the array.
let colors = ["red", "blue", "green"];
colors.push("yellow");
console.log(colors);

//pop is used to remove the last item from an array.  The return type for pop is a string.
let lastColor = colors.pop();
console.log(lastColor);

//shift removes the first element from an array. The return type for shift is a string.
let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);

//the unshift method adds an element to the beginning of an array. The return type for unshift is a number. The new length of the array.
let newLength = colors.unshift("purple");
console.log(colors);
console.log(newLength);  //returns the new length of the array



