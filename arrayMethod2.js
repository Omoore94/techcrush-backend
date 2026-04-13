//ARRAY METHODS. 
//forEach( ) method goes thru each element in the array and does something, it doesnt create a new list of array. 
let fruits = ["apple", "banana", "orange", "grape", "mango"];
fruits.forEach(function(fruit) {
    console.log("I eat " + fruit)
});

//forEach( ) is both a function and a loop. Used for arrays. 


//map( ) will return a new array by transforming.
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map(score => score + 5);
console.log(newScores);


let students = ["esther", "ayo", "john", "amara", "val"];
let nameTag = students.map(tag => {
    return "TECH_CRUSH_2026_COHORT_6 " + tag
});
console.log(nameTag);
//the main difference between map and forEach is that forEach does not return a new array, while map does. The syntax are the same. 


//filter( ) method. Used to loop thru array and returns the element that meet your declared condition(s).. Also returns a new array.
//filter returns all the elements that matches your condition. 
let jambScores = [190, 120, 201, 212, 195, 100, 110, 250];

let passedScores = jambScores.filter((score) => {
    return score > 180
})
console.log(passedScores);

//find( ) used to return the first item in an array that matches your condition. if nothing is found, it returns undefined and unlike filter, it stops after finding the first match. 

const studentNames = ["john", "paul", "john", "amara", "gen", "osamose", "dickson"];
const found = studentNames.find((name) => {
    return name === "john"
});
console.log(found);


//reduce( ), it boils an entire array down into a single valuet, it is great for getting totals, sums  of an array. It takes in two parmeters, i. initial ii. accumulator
let cartPrices = [1500, 800, 2200, 450, 1000];

let total = cartPrices.reduce((acc, currentPrice) => {
    return acc + currentPrice
}, 0); //0 is the start state, optional parameters. 
console.log(total);


//OBJECT
let student = {
    name: "paul afekhume",
    age: 21,
    department: "brewing",
    isEmployed: true
};

console.log(student.name);
console.log(student["department"]);

//OBJECT DESTRUCTING
//This is the act of pulling out values from an object and storing them in a new or different variable name. 
let employee = {
    name: "Tunde Balogun",
    role: "backend developer",
    isEmployed: true,
    state: "Edo",
    salary: 200000
};
//manual destructuring.
let newName = employee.name
let newRole = employee.role
console.log(employee.name);
console.log(employee.role);

//Auto destructuring.
let {name : surname} = employee;
console.log(surname);
console.log(employee);

//spread and rest operator (...) 
//the spread operator opens up an array and spread it items. 
let profile = {name: "Ada", age: 21}

//spread operator, copies property from an object into another
//spread operator(...) is like copying the entities of one object into another.
let updatedProfile = {
    ...profile, 
    city:"Abuja"
};

console.log(updatedProfile);