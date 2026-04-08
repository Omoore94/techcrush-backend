//Create a function that takes in user inputs and returns a formatted version of them to DB. 
function formatUserProfile(name, email, phone){
    //clean up username
    let cleanName = name.trim()
    let formatted = cleanName
                        .toLowerCase()   //converts entry name to all lowercase.
                        .split(" ")      //split by " ", returns user name in an array
                        .map(word => word[0].toUpperCase() + word.slice(1))   //fist letter of name is Upper + the rest of the letters
                        .join(" "); //converts the mapped array to a string.
  //validate email contains @
  if (!email.includes("@")) {
    throw new Error("Invalid email address!");
  }

  //mask the phone number.
  let maskedPhone = phone.slice(-4).padStart(phone.length, "*");

  console.log("Name: " + formatted);
  console.log("Email: " + email.toLowerCase());
  console.log("Phone number: " + maskedPhone);
}
formatUserProfile("  Paul AfEkHume  ", "omoh.Afekhume@gmail.com", "081432533894");