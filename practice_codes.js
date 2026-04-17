// reduce method. 
const numbers = [2, 3, 6, 9, 5];
let total = numbers.reduce((acc, currentValue) => {
    return acc + currentValue
}, 0);

console.log(total);

//filter method 
let items = [2, 4, 5, ,7 ,8, 10, 12, 9, 11, 15, 18];
let even = items.filter((item) => {
    return item % 2 === 0;  //using filter to return all even numbers in an array 
});

console.log(even);

//some
let val = [2, 4, 6, 8, 9, -1];
let someItemNegative = val.some((items) => {
    return items < 0  //checks if some/any item meet the condition
});
console.log(someItemNegative);

//every
let fig = [2, 4, 6, 8, 9, -1];
let everyItemPositive = fig.every((items) => {
    return items > 0  //checks if every item meet the condition
});
console.log(everyItemPositive);

//forEach using a display function.
let num = [1, 2, 3, 4, ,5, 6, 7];
num.forEach(display)  //for each item in num, call back the display function and perform action/command.

function display(element) {
    console.log(element)
};

let fruits = ["apple", "mango", "avocado", "orange", "watermelon"];
fruits.forEach()
