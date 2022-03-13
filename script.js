// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',]
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+',]



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

alert("Hello! Please click the Generate Password button to get your password.");

document.getElementById("generate").addEventListener("click", writePassword);
function generatePassword() {
  var userApprovedCharacters = [];
 

  alert("Please answer some questions that will assit me in generating a password for you.");

  var passwordLength = prompt("How many characters would you like your password to include? Please enter a number between 10 and 120.");

  if (passwordLength > 10 &&  passwordLength < 120) {
    alert("You have chosen" + " " + (passwordLength) + " " + " characters for your password length. Let's move on!");
    console.log(passwordLength + " " + "characters in the password");

  } else if (passwordLength < 10 || passwordLength > 120) {
    alert("Please try again. Enter a password length between 10 and 120 characters.");
    return generatePassword();
  }

  var passwordContainsLowercase = confirm("Would you like your password to include lowercase letters?");
  if (passwordContainsLowercase === true) {
    alert("You will have lowercase letters in your password");
  }

  var passwordContainsUppercase = confirm("What about UPPERCASE letters in your password?");
  if (passwordContainsUppercase === true) {
    alert("You will have UPPERCASE letters in your password.");
  }

  var passwordNumbers = confirm("Will numbers be in your password?");
  if (passwordNumbers === true) {
    alert("You will have numbers in your password.");
  }

  var passwordSymbols = confirm("Would you like to have symbols in your password?");
  if (passwordSymbols === true) {
    alert("You will have symbols in your password.");
  }

  if (passwordContainsLowercase === false &&
    passwordContainsUppercase === false &&
    passwordNumbers === false &&
    passwordSymbols === false) {
    alert("Whoops. You answered no to all my questions. Please try again.");
    generatePassword();
  }

  if (passwordContainsLowercase === true) {
    for (var i = 0; i < lowercase.length; i++) {
      userApprovedCharacters.push(lowercase[i]);
      console.log("contains lowercase letters");
    }
  }

  if (passwordContainsUppercase === true) {
    for (var i = 0; i < uppercase.length; i++) {
      userApprovedCharacters.push(uppercase[i]);
      console.log("contains uppercase letters");
    }
  }

  if (passwordNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      userApprovedCharacters.push(numbers[i]);
      console.log("contains numbers");
    }
  }

  if (passwordSymbols === true) {
    for (var i = 0; i < symbols.length; i++) {
      userApprovedCharacters.push(symbols[i]);
      console.log("contains symbols");
    }
  }

  console.log(userApprovedCharacters);

  var password = " "

  for (i = 0; i < passwordLength; i++) {
    var RandomIndex = Math.floor(Math.random() * userApprovedCharacters.length);
    var randomCharacter = userApprovedCharacters[RandomIndex];
    password = password + randomCharacter;
    console.log(password);}

    return password
  }
