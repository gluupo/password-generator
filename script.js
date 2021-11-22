// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = "";
var blahLength = 0;
var str = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  charset = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function rando() {
  str = "";
  for (var i = 0; i < blahLength; i++) {
    str += charset[Math.floor(Math.random() * charset.length)];
  }
  console.log(str)
}

function generatePassword() {
  blahLength = Number(prompt("how many characters would you like your password to be?"));
  while (isNaN(blahLength) || blahLength < 8 || blahLength > 128) blahLength = Number(prompt("please choose a valid option. the length must be between 8-128 characters."));
  // requires user to choose a number between 8 and 128, otherwise returns "please choose a valid option"

  var upperCase = confirm("would you like to use uppercase letters?");
  if (upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = confirm("would you like to use lowercase letters?");
  if (lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
  var numCase = confirm("would you like to use numbers?");
  if (numCase) charset += "1234567890";
  var speChar = confirm("would you like to use special characters?");
  if (speChar) charset += "!@#$%^&*(){}[]=<>/,.";
  // creates variables for each case and makes user choose confirm or cancel to above questions

  while (!upperCase && !lowerCase && !numCase && !speChar) {
    alert("please select at least one character type! :-)");
    upperCase = confirm("would you like to use uppercase letters?");
    lowerCase = confirm("would you like to use lowercase letters?");
    numCase = confirm("would you like to use numbers?");
    speChar = confirm("would you like to use special characters?");
    // alerts user to choose at least one character type if they go through all questions and don't choose any
  }
  rando();
  console.log(str);
  return str;
}
