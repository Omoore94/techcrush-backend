//ARRAY METHODS. 
//1. 
const numbers = [2,4,6,8];
numbers.forEach(function(number){
    console.log(number*2)
});

//2. 
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name){
    console.log("Hello, " + name + "!")
});

//3. 
let numbs = [1,2,3,4,5]
squaredNumbers = numbs.map(number => number*number)
console.log(squaredNumbers);

//4. 
const prices = [100, 200, 300];
discountedPrices = prices.map(price => price * 0.90) //discounted price.
console.log(discountedPrices);

//5. 
let numbrs = [5, 12, 8, 20, 3];
greater_than_ten = numbrs.filter(number => {
    return number > 10
});
console.log(greater_than_ten);

//6. 
const ages = [15, 22, 17, 30, 18];
overAge = ages.filter(age => {
    return age >= 18
});
console.log(overAge);

//7. 
const numbers2 = [10, 15, 20, 25, 30];
greater_than_twenty = numbers2.filter(number => { //filter number greater than 20
    return number > 20
});
double = greater_than_twenty.map(number => number * 2) //return double the numbers in an array
console.log(double);

