// Method() and Properties
// Every data type in JS comes with inbuilts properties. 
// Properties and used by dot (.) ..eg name.length

// Method and js in-built functions
// Method are used by the dot(.) and ()
// E.g name.toUpperCase()
// ALWAYS know the return type of every method you are using.

// There are two types of functions => user defined and in-built (methods)


let str = "This is javascript class."
console.log(str.length);

//1. case conversion.. Upper and Lower
let capitalLetter = str.toUpperCase();
console.log(capitalLetter);

let smallLetter = str.toLowerCase();
console.log(smallLetter);


// 2. trim()
// trim() => trims all white spaces before and after strings
// trimEnd() = > trims all white spaces at the end of a string
// trimStart() => trims all white spaces at the start of a string
let trimStr = "   I am going to school to eat and sleep.  ";
let trim1 = trimStr.trim();
let trim2 = trimStr.trimEnd();
let trim3 = trimStr.trimStart();  //all trims return a string datatype.

console.log(trim1);
console.log(trim2);
console.log(trim3);


// 3. indexOf() => These methods help you search inside a string to find the index number....
// indexOf() returns -1 if it searches and finds nothing. 
//indexof(string) expects a string parameter with which it would search for it's index.
//index begins from zero (0)
// indexOf() returns a number
let user_email = "omoh.afekhume1@gmail.com";
let email_index = user_email.indexOf("@");    //returns the index number of "@" in the string. 
console.log(email_index);    


// 4. includes() => it checks if a portion of a character is in or exists in a string and retuns a bool (true or false)
let email_constains_at = user_email.includes("@");  //checks if "@" is included in the string
console.log(email_constains_at);




//5. startsWith() and endsWith() => checks if a sequence of character/strings starts with or ends with a/some particular character.
// it returns a bool (true or false)
let user_name_starts_with_omoh = user_email.startsWith("omoh");
console.log(user_name_starts_with_omoh);


let user_name_ends_with_com = user_email.endsWith(".com");
console.log(user_name_ends_with_com);


//6. slice() and substring()
//This two methods are use to extract/get a sequence of strings/characters from a string. It expects the start index and end index as parameters. 
// It returns a string. 
let fullName = "Paul Omoh Afekhume"; 
let slicedName = fullName.slice(0, 4); //returns "Paul" ....//note: it slices upto an index before the end index received. 
console.log(slicedName);
console.log(fullName.slice(-8));   //returns the last 8 inddex.

let substrName = fullName.substring(0, 12);
console.log(substrName);
console.log(fullName.substring(-8));   //substring sees a negative parameter as 0, so it begins slice from 0 index. 


//7. replace() and replaceAll();
//replace()replaces the FIRST ENCOUNTERED character/string or in an array with a new character that you want. 
//it returns a string. 
//replaceAll replaces all the the encountered character/string with the new string/character you want. 
//It expects the existing string/character AND the new one as parameters. 
let sent = "Paul is a man, Paul loves to read, and Paul loves to brew beer.";
let replacedPaul = sent.replace("Paul", "He");
console.log(replacedPaul);
let replacedAllPaul = sent.replaceAll("Paul", "He").replace("and", "&").replace("He", "Paul");
console.log(replacedAllPaul); 

// let padPaul = replacedAllPaul.padStart("Paul")


//8. split()
//split breaks a string into an ARRAY of smaller string by cutting it wherever it finds the "expected common seperator" that you give it
//it expects a seperator (usually common to the original string) as parameter.
//split() returns an ARRAY.
let courses = "Javascript,NodeJs,Python,HTML,CSS";
let splitCourse = courses.split(",") //split the courses above using the the common separator in the string comma (,)
console.log(splitCourse);
console.log(typeof splitCourse);  //datatype is an object/array.
//you can split a sentence into individual words by splitting with the common seperator (" ")
//you can split a word into individual alphabets by splitting with the common separator ("")
mappedCourse = splitCourse.map(word => word[0].toLowerCase() + word.slice(1).toUpperCase());
console.log(mappedCourse);

//9. join()
// joins an array by a common joiner. It returns a string. Mostly used after split to rejoin. 
//join basically converts an array TO a long string joined by your chosen  "joining-element"
let joinedCourse = splitCourse.join("-");
console.log(joinedCourse);


//9. padStart(), padEnd() and repeat()
//pad appends a string/character to the start or end of another string/sequence of character. 
// it expects the "maximum length of character expected after the padding" and the "string to pad to" the original string as parameters.
//it returns a string.
let phoneNumber = "08143253894";
let padNumber = phoneNumber.replace("0", "+234");  //replaces the 0 with +234 in the number. 
console.log(padNumber);

let paddedNo = phoneNumber.padStart(15, "+234").replace("0", "");
console.log(paddedNo);

//padEnd
let file = "thegreatgatsby";
let fileExt = ".pdf";
let padfileName = file.padEnd(file.length + fileExt.length, ".pdf");
console.log(padfileName);

//10. repeat() => creates a new string by repeating the original string a given number of times.
//returns a string
let numb = "6";
reNumb = numb.repeat(3);  //repeats 6, 3 times. 
console.log(reNumb);

