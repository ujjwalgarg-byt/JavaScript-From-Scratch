const accountId = 200402;
let accountEmail = "ujjwal@google.com";
var accountPassword = "12345";

accountCity = "Mumbai";
// accountId = 112233; //not allowed

// let,var are changed after initialisation
accountEmail = "diya@gmail.com";
accountPassword = "2345";
accountCity = "dehradoon";

// prefer not to use var b'coz of issue in block and functional scope
console.log(accountId);
//if there are more than 1 variable to print then use console.table instead of clog
console.table([accountId,accountEmail,accountPassword,accountCity]);