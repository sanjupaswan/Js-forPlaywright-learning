const accountId = 123456789
let accountEmail = "user@example.com"
var accountPassword = "securepassword123"
accountCity = "jaipur"
// accountId = 2
console.log(accountId);

accountEmail = "sanju@gmail.com"
accountPassword = "21212"
accountCity = "City"
let accountState;

/*
Prefer not to use var for variable declaration as it has function scope and can lead to unexpected behavior. 
Instead, use let for variables that may change and const for variables that should not change.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
