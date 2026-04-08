//ONLINE BOOKSTORE ORDER.

//TASK 1. 
let customerName = "Paul";
let customerAge = 30;
let bookTitle = "The great gatsby";
let bookPrice = 500;
let quantity = 3;
let isStudent = true;


//TASK 2.
let totalPrice = bookPrice * quantity;


//TASK 3. 
let isAdult = customerAge == 30;


let buyingManyBooks = quantity == 3;


let isBookFiveThousand = totalPrice > 5000;



// TASK 4. 
const customerOrder = {customerName: "Paul", bookTitle: "The great gatsby", quantity: 50, totalPrice: 1500};



// TASK 5.
console.log("Customer name:" + customerName);
console.log("Book title:" + bookTitle);
console.log("Total price:" + totalPrice);
console.log("Customer is an Adult:" + isAdult);
console.log("Is buying many books:" + buyingManyBooks);
console.log("is buying books greater than 5000:" + isBookFiveThousand);
console.log(customerOrder);