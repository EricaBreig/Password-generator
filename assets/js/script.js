// Assignment Code.
var generateBtn = document.querySelector("#generate");
// This is the function for the options that the user will be able to choose from to design their password. ======================
function options() {
  var choices = {};
  var lowerCaseOption = window.confirm(
    "First thing's first! Do you want lowercase letters in your password?"
  );
  if (lowerCaseOption) {
    choices.lower = lowerCaseOption;
    console.log(choices);
  } else {
    console.log(
      "Ok, dude! Your password will not contain any lowercase letters!"
    );
  }
  var upperCaseOption = window.confirm(
    "Do you want uppercase letters in your password?"
  );
  if (upperCaseOption) {
    choices.upper = upperCaseOption;
    console.log(choices);
  } else {
    console.log(
      "Okay, dudette! Your password will not contain any uppercase letters!"
    );
  }
  var numericalOption = window.confirm("Do you want numbers in your password?");
  if (numericalOption) {
    choices.numbers = numericalOption;
    console.log(choices);
  } else {
    console.log("Okay, peeper. Your password will not contain any numbers!");
  }
  var specialCharactersOption = window.confirm(
    "Do you want special characters in your password?"
  );
  if (specialCharactersOption) {
    choices.special = specialCharactersOption;
    console.log(choices);
  } else {
    console.log("The Password will not contain any special characters!");
  }
  var zalgoOption = window.confirm(
    "Do you want Z̷̡̰̖̼͖͓͉͎̰̰̖̰̐͆̊̋̈́̂̀̌̌̊͂̎ã̴̞͍͕͙̭͇͙̯̮̼̚l̷̬̺̦̣͊́̏̾̕̚g̴̗̀̓͊͂́̓͘̕o̵̢͕͕̠̬̤̜̲͓̿̄̈́́̍̒͂̓̀͘͝ͅ in your generated password?"
  );
  if (zalgoOption) {
    choices.zalgo = zalgoOption;
    console.log(choices);
  } else {
    console.log("Well, okay....Your password will not contain any Z̷̡̰̖̼͖͓͉͎̰̰̖̰̐͆̊̋̈́̂̀̌̌̊͂̎ã̴̞͍͕͙̭͇͙̯̮̼̚l̷̬̺̦̣͊́̏̾̕̚g̴̗̀̓͊͂́̓͘̕o̵̢͕͕̠̬̤̜̲͓̿̄̈́́̍̒͂̓̀͘͝ͅ!");
  }
  // If user does not agree to any of the above choices, then it will call the function again until doing so.=======================
  if (
    !lowerCaseOption &&
    !upperCaseOption &&
    !numericalOption &&
    !specialCharactersOption &&
    !zalgoOption
  ) {
    console.log("Not making any selections will cause the program to end");
    return;
  }
  return choices;
}

// Password character types:  =====================================================================================
function generatePassword() {
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = [
    "@",
    "%",
    "+",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  var zalgo = [
    "Ã̸͖͛",
    "B̵̡̬̗̍",
    "C̶̰̗̳̠͍̈̆̀͒͗",
    "D̶̹̖̤̩͍́͂",
    "Ę̷͔̲͈͉̕̚",
    "F̵̨͍̯͉̹̿̈́",
    "G̷͈͘͝",
    "H̴͔̜̊ͅ",
    "I̷̛̠̤͓͐͑̅͝",
    "J̸͉̈̓́",
    "Ḳ̷̊̇̑͠",
    "Ĺ̴͔̲̫̖͗͂",
    "Ṃ̸̳̞̀͒",
    "N̶̩̄͝",
    "Ö̶̻͉̌̐",
    "Ṗ̶̡̻̖̝͈́̕͘͝",
    "Q̴̢̈́̀̐͝",
    "R̶̙̤̳̩͍̽͗̈́̽",
    "Ş̴̜̣̔̊",
    "T̵̬͈̟͇͝",
    "Ṵ̴̭͔̭̀",
    "V̷̭͉̞͍̉̏̌̀̒",
    "W̶͕̗̖̹͂̾̈́͜",
    "Ẋ̴̨͇̤̼̯̓̎͋̉",
    "Y̶͍̳͌̽",
    "Z̴̢̳̖̀̒̌̈́",
    "a̷͙̹̫̝͚͝",
    "b̴̥͉̈́͠",
    "c̷̲͙̍͘͜͝",
    "d̸͓̋̒̔̿",
    "ê̶̮̦̜̙͜",
    "f̸̻̓͆́",
    "g̷̦̭͑",
    "h̴̜̝̤̬̉͜",
    "į̸̤̃͑",
    "j̶̢̧͈̖̈́̀́",
    "k̸͖̠͍̾͂̃̏",
    "l̷̨̟͇̜̑̒ͅ",
    "m̷̗͕̬͙̻̆̈͘",
    "ņ̴͍̭̦͔̋̓̀͘",
    "o̴̯͎̪͈͔̕",
    "p̸̡͚̦̔",
    "q̷̻̰̂͝",
    "r̵̢͛̕",
    "ś̴̞",
    "t̵̳̿͊̈",
    "ų̵̮̺͎͎̄",
    "v̵͎̪̻̅͗",
    "w̶̙̮̞̃̋̀̃",
    "ẍ̶̨̖̞̝́͋̅̋̽",
    "y̷̲̆̒͒̓̚",
    "ẑ̷̧͖͇̟̹͆͝",
  ];

  var creatingPassword = [];
  var finalPassword = "";
  // If user chooses proper length of password, it will continue to the next step. If not, it will end the program.================
  var passwordLength = window.prompt(
    "Please choose a length between 8 and 128 characters."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Great job! It's between 8 and 128");
  } else if (passwordLength === null) {
    alert("No? You don't want a randomly generated password? Your funeral.");
    return;
  } else {
    alert(
      "Excuse me!!! It sas to be a number between 8 and 128... Try again, yo!"
    );
    return;
  }
  console.log(passwordLength);
  // Create a variable and assign it the value of options() function call
  var chosenOptions = options();
  // Generator ends if no options are selected ==============================
  if (!chosenOptions) {
    console.log(
      "Well done. No options were selected. You must think you're so clever."
    );
    alert(
      "FYI, you must click 'OK' on one of the options to generate a random password...take it sleezy."
    );
    return;
  }
  // If/for statements that take in the user's option selection. =============================================================
  if (chosenOptions.lower) {
    for (var i of lowerCase) {
      creatingPassword.push(i);
      console.log(creatingPassword);
    }
  }
  if (chosenOptions.upper) {
    for (var i of upperCase) {
      creatingPassword.push(i);
    }
  }
  if (chosenOptions.numbers) {
    for (var i of numerical) {
      creatingPassword.push(i);
    }
  }
  if (chosenOptions.special) {
    for (var i of specialCharacters) {
      creatingPassword.push(i);
    }
    if (chosenOptions.zalgo) {
      for (var i of zalgo) {
        creatingPassword.push(i);
      }
    }
  }
  chosenOptions["length"] = passwordLength;
  console.log(creatingPassword);

  //============= having an issue where if any options are left out, it only generates from one type of character=======
  // Creates the password length based on what is selected by the user =========================================================
  for (var i = 0; i < passwordLength; i++) {
    console.log(creatingPassword);
    finalPassword +=
      creatingPassword[Math.floor(Math.random() * creatingPassword.length)];
  }
  console.log(finalPassword);
  return finalPassword;
}
// This puts the generated password into the password input =======================================================================
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText);
}
// This generates the button by adding an event listener with "click"===============================================
generateBtn.addEventListener("click", writePassword);

// PREVIOUS CODE EXPERIMENTAL TYPING ============================================

//Password Character types
// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lower = "abcdefghijklmnopqrstuvwxyz";
// var nunber = "1234567890";
// var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// var zalgo =  "Ã̸͖͛B̵̡̬̗̍C̶̰̗̳̠͍̈̆̀͒͗D̶̹̖̤̩͍́͂Ę̷͔̲͈͉̕̚F̵̨͍̯͉̹̿̈́G̷͈͘͝H̴͔̜̊ͅI̷̛̠̤͓͐͑̅͝J̸͉̈̓́Ḳ̷̊̇̑͠Ĺ̴͔̲̫̖͗͂Ṃ̸̳̞̀͒N̶̩̄͝Ö̶̻͉̌̐Ṗ̶̡̻̖̝͈́̕͘͝Q̴̢̈́̀̐͝R̶̙̤̳̩͍̽͗̈́̽Ş̴̜̣̔̊T̵̬͈̟͇͝Ṵ̴̭͔̭̀V̷̭͉̞͍̉̏̌̀̒W̶͕̗̖̹͂̾̈́͜Ẋ̴̨͇̤̼̯̓̎͋̉Y̶͍̳͌̽Z̴̢̳̖̀̒̌̈́a̷͙̹̫̝͚͝b̴̥͉̈́͠c̷̲͙̍͘͜͝d̸͓̋̒̔̿ê̶̮̦̜̙͜f̸̻̓͆́g̷̦̭͑h̴̜̝̤̬̉͜į̸̤̃͑j̶̢̧͈̖̈́̀́k̸͖̠͍̾͂̃̏l̷̨̟͇̜̑̒ͅm̷̗͕̬͙̻̆̈͘ņ̴͍̭̦͔̋̓̀͘o̴̯͎̪͈͔̕p̸̡͚̦̔q̷̻̰̂͝r̵̢͛̕ś̴̞t̵̳̿͊̈ų̵̮̺͎͎̄v̵͎̪̻̅͗w̶̙̮̞̃̋̀̃ẍ̶̨̖̞̝́͋̅̋̽y̷̲̆̒͒̓̚ẑ̷̧͖͇̟̹͆͝";

// //Object: Password Character length input.  Validates if it is between 8 and 128 characters.
// function generatePassword() {

// var passwordLength = window.prompt("Choose length of password between 8 and 128 characters.");
//     if ((passwordLength >= 8) && (passwordLength <= 128)) {
//         console.log("Awesome, it's between 8 and 128, yo");
//     } else if (passwordLength === null) {
//         alert("Nah? Okie, dokie, some other time, brah");
//         return;
//     } else {
//         alert("Nah, dawg. It has to be a number between 8 and 128...Please try again!");
//     }

// var passwordType = window.alert ("What types of characters would you like to use?");
// window.confirm ("Would you like uppercase letters?")
//     if (passwordType){
//       window.confirm ("Would you like lowercase letters?")

//     }

//   }

// Assignment Code - Established Query Selectors
// var generateBtn = document.querySelector("#generate");
// passwordText = document.querySelector("#password");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

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

// for (var i = 0; i < passwordLength.length; i++)
//   text += possible.charAt(Math.floor(Math.random() * possible.length));

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
