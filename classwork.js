//1. 
const numbers = [1,2,3,4,5];
let double = numbers.map(function(numb){
    return numb * numb
});
console.log(double);

//2. 
const scores = [250, 300, 250, 200, 400, 180];
let greater = scores.filter(function(score){
    return score >= 300
})
console.log(greater);

//3. 
// let total = score.reduce(function (acc, price) {
//     return acc * price;
// }, 0); //acc, current value, initial value. 

// console.log(total);


//4. 
const colors = ["blue", "yellow", "red"];
let popOut = colors.push("green");
console.log(popOut);
