//Password Character types
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var nunber = "1234567890";
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var zalgo =  "Ã̸͖͛B̵̡̬̗̍C̶̰̗̳̠͍̈̆̀͒͗D̶̹̖̤̩͍́͂Ę̷͔̲͈͉̕̚F̵̨͍̯͉̹̿̈́G̷͈͘͝H̴͔̜̊ͅI̷̛̠̤͓͐͑̅͝J̸͉̈̓́Ḳ̷̊̇̑͠Ĺ̴͔̲̫̖͗͂Ṃ̸̳̞̀͒N̶̩̄͝Ö̶̻͉̌̐Ṗ̶̡̻̖̝͈́̕͘͝Q̴̢̈́̀̐͝R̶̙̤̳̩͍̽͗̈́̽Ş̴̜̣̔̊T̵̬͈̟͇͝Ṵ̴̭͔̭̀V̷̭͉̞͍̉̏̌̀̒W̶͕̗̖̹͂̾̈́͜Ẋ̴̨͇̤̼̯̓̎͋̉Y̶͍̳͌̽Z̴̢̳̖̀̒̌̈́a̷͙̹̫̝͚͝b̴̥͉̈́͠c̷̲͙̍͘͜͝d̸͓̋̒̔̿ê̶̮̦̜̙͜f̸̻̓͆́g̷̦̭͑h̴̜̝̤̬̉͜į̸̤̃͑j̶̢̧͈̖̈́̀́k̸͖̠͍̾͂̃̏l̷̨̟͇̜̑̒ͅm̷̗͕̬͙̻̆̈͘ņ̴͍̭̦͔̋̓̀͘o̴̯͎̪͈͔̕p̸̡͚̦̔q̷̻̰̂͝r̵̢͛̕ś̴̞t̵̳̿͊̈ų̵̮̺͎͎̄v̵͎̪̻̅͗w̶̙̮̞̃̋̀̃ẍ̶̨̖̞̝́͋̅̋̽y̷̲̆̒͒̓̚ẑ̷̧͖͇̟̹͆͝";



// //Object: Password Character length input.  Validates if it is between 8 and 128 characters.
function generatePassword() {

var passwordLength = window.prompt("Choose length of password between 8 and 128 characters.");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
        console.log("Awesome, it's between 8 and 128, yo");
    } else if (passwordLength === null) {
        alert("Nah? Okie, dokie, some other time, brah");
        return;
    } else {
        alert("Nah, dawg. It has to be a number between 8 and 128...Please try again!");
    }

var passwordType = window.alert ("What types of characters would you like to use?");
window.confirm ("Would you like uppercase letters?")
    if (passwordType){ 
      window.confirm ("Would you like lowercase letters?")

    }


  }


// Assignment Code - Established Query Selectors
var generateBtn = document.querySelector("#generate");
passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//============================================
//Do I want capital letters
//Do I want lowercase letters
//do I want numbers
//do i want special characters
//do I want ZALGO


// function passwordOptionAll() {
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@][/^_`{|}~";

  for (var i = 0; i < passwordLength.length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }
// var password = passwordOption();
// console.log(password);

// console.log(passwordOption());

/// ===========================================Z A L G O
// function zalgo() {
//   var text = "";
//   var possible = "Ã̸͖͛B̵̡̬̗̍C̶̰̗̳̠͍̈̆̀͒͗D̶̹̖̤̩͍́͂Ę̷͔̲͈͉̕̚F̵̨͍̯͉̹̿̈́G̷͈͘͝H̴͔̜̊ͅI̷̛̠̤͓͐͑̅͝J̸͉̈̓́Ḳ̷̊̇̑͠Ĺ̴͔̲̫̖͗͂Ṃ̸̳̞̀͒N̶̩̄͝Ö̶̻͉̌̐Ṗ̶̡̻̖̝͈́̕͘͝Q̴̢̈́̀̐͝R̶̙̤̳̩͍̽͗̈́̽Ş̴̜̣̔̊T̵̬͈̟͇͝Ṵ̴̭͔̭̀V̷̭͉̞͍̉̏̌̀̒W̶͕̗̖̹͂̾̈́͜Ẋ̴̨͇̤̼̯̓̎͋̉Y̶͍̳͌̽Z̴̢̳̖̀̒̌̈́a̷͙̹̫̝͚͝b̴̥͉̈́͠c̷̲͙̍͘͜͝d̸͓̋̒̔̿ê̶̮̦̜̙͜f̸̻̓͆́g̷̦̭͑h̴̜̝̤̬̉͜į̸̤̃͑j̶̢̧͈̖̈́̀́k̸͖̠͍̾͂̃̏l̷̨̟͇̜̑̒ͅm̷̗͕̬͙̻̆̈͘ņ̴͍̭̦͔̋̓̀͘o̴̯͎̪͈͔̕p̸̡͚̦̔q̷̻̰̂͝r̵̢͛̕ś̴̞t̵̳̿͊̈ų̵̮̺͎͎̄v̵͎̪̻̅͗w̶̙̮̞̃̋̀̃ẍ̶̨̖̞̝́͋̅̋̽y̷̲̆̒͒̓̚ẑ̷̧͖͇̟̹͆͝";
//   for (var i = 0; i < 8; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// var password = zalgo();
// console.log(password);

//NOTES ===========
//prompt lets you enter in stuff
//confirm asks you to select cancel or ok
//  if (parseInt(askPasswordLength) >= 8 && parseInt(askPasswordLength) <= 128) {
//   askPasswordLength = askPasswordLength;


// HOW TO CALL LE CHILDRENS  
// var poop = document.body.children(0).children(2);
 // console.log(poop)