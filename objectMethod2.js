//WEEK 4. 
//ITERATING OVER OBJECTS.
//There are threec ways to loop thru an object. 
//1. for...in
//2. object.keys  => returns the keys of the object
//3. object.value  => returns the value of the object. 
//4. object.entry  => returns the entity of the object.

//FOR..IN
const user = {
    name: "esther",
    password: "12345",
    isFemale: true,
    city: "lagos",
    age: 25
};

//for in => used to target the keys in an object
for (let key in user){
    console.log("these are the key " + key)
    console.log("these are the values: " +user[key])
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


//ERROR HANDLING : try, catch and finally. 
//errors can be classified as user-errors and system-errors
//
//syntax error=> typographical or format
//reference error  => undefined or undeclared variable that does not exist
//type error  => Using the wrong method, property or wrong data type. 

//TRY AND CATCH METHOD OF ERROR HANDLING
//This allows your programme gracefully, isntead of cradhing, JS runs your back-up inside the catch block.


try{
    //code that might fail goes here.
    let result = 10 / 0;
    console.log(result);
    undefinedFunction();  //this will cause an error!
    console.log("This line will NOT run");  //because of the thrown error above
}catch(error) {
    //this runs only if something goes wrong
    console.log("An error occured: " + error.name, error.message);
}
console.log("The program continues here. ");



try {
    let age = 25
    console.log(age.length())
}catch(error){
    console.log("An error occured: " + error.message);
}

//the error OBJECT inside catch (error)
//When an error is caught, js gives you an error object with useful info about what went wrong. 
//we have error.name  => TypeError or type of error
//error.message => a human readable explanation of the error
//error.stack => full trace showing where the error happened. 

//Finally => This is a block that will ALWAYS run, whether there's error or not. 


function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("user ID must start with BAD");
        }
        console.log("Data loaded for user: " +userId);
    } catch (error){
        console.log("Failed: " +error.message);
    } finally {
        console.log("Loading complete. Close connection. ");
    }
}
loadUserData("BAD_5611");