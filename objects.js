//object is a collection of related data stored as key-value pairs. Think of it is as way to describe a real-world thing with multiple properties.
//key => variable name; value => value/any datatype.
//To access it, we use dot (.) or []
//Array holds different values or list of items, Object used to describe property of an entity.
//creating an object =>
let obj = {
    name : "Esther",
    age : 25,
    profession : "Developer"
};

//to access an element in an object, you use the "key"
console.log(obj.name); //dot method of accessing an object
console.log(obj["age"]); //square bracket method



//DESTRUCTURING => is a shortcut for pulling out values from an object and storing them in a seperate variable(s). 
//It is a way of extracting them in one line. 

let employee = {
    name: "paul",
    role: "SMB",
    city: "Aba",
    phone: "08143253894"
};
// let newName = employee.name;  //old method of destructing
// let newRole = employee.role;

const {name, role} = employee //destructing => taking out individual element of an object.
console.log(name);
console.log(role);

let {name : surname} = employee; //renaming keys in an object
console.log(surname);

let person = {
    name: "Amina",
    opay: true,
};

let {opay: palmpay} = person; //renaming the key. 
console.log(palmpay);


//The spread and rest operators
//The spread => it opens an array and spreads its item. 
//Its collect properties of an object, and use that property in an another object


let profile = {name: "Ada", age: 22};

//copy and add new properties. 
let updatedProfile ={
    ...profile,  //spread operator (...) => spread profile into this new object.
    city: "Abuja"
};

console.log(updatedProfile);


//REST operator

