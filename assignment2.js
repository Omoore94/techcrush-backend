//1. 
const str = "Nigeria is awesome";
extractedStr1 = str.substring(0,7);
extractedStr2 = str.slice(-7);
is_extraction = str.slice(8,10);
console.log(extractedStr1);
console.log(extractedStr2);
console.log(is_extraction);

//2. 
const names = "John,Jane,Doe";
name_split = names.split(",");
name_join = name_split.join(" ");
const path = "/user/home/docs";
path_split = path.split("/");   //split method.
check_home_index = path_split.indexOf("home");   //checking index of home in array
get_home = path_split[2];   //get home using index returned above.
console.log(get_home);

//3. 
const email = "user@example.com";
split_mail = email.split("@");  //split by @
check_user_index = split_mail.indexOf("user");  //check index of user.
get_user = split_mail[0];  //get user using index returned from above.
console.log(get_user);
is_dot_com_mail = email.endsWith(".com");  //check if .com mail
console.log(is_dot_com_mail);

replace_with_at = email.replace("@", "AT");  //replace @ with AT.
console.log(replace_with_at);