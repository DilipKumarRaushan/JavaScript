const accountId = 144553
let accountEmail = "dilip@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "raushan@gmail.com"
accountPassword = "2121212"
accountCity = "Delhi"

console.log(accountId);
/*
Prefer not ot use var because of issue in block scope
and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
