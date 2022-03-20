//return values and pass values to functions

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function passwordOption() {
//   text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@][/^_`{|}~";

//   for (var i = 0; i < 8; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }
// var password = passwordOption();
// console.log(password);

// console.log(passwordOption());
