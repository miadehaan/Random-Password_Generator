// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters= []; //see for loop below
var specialChar = ['@', '#', '$', '%', '/', '_', '*'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Generate array for 'upperLetters' by using the array 'lowLetters'
for(var i=0; i < lowLetters.length; i++) {
  var x = lowLetters[i].toUpperCase();
  upperLetters[i] = x;
}

//Prompt the user for specific criteria
var userLength = prompt("Input the number of characters (8-128) you would like your password to be: ");
var userLowercase = confirm("Would you like to include lowercase letters?");
var userUppercase = confirm("Would you like to include uppercase letters?");
var userNumeric = confirm("Would you like to include numbers?");
var userChar = confirm("Would you like to include special characters?");
var values = [];

//Validate the user's selections and display it back
alert("You want a password with " + userLength + " characters and the following criteria: " + "\r\n" +
"Lowercase Letters: " + userLowercase + "\r\n" +
"Uppercase Letters: " + userUppercase + "\r\n" +
"Numeric Values: " + userNumeric + "\r\n" +
"Special Characters: " + userChar );


//Create an array with all possible characters that user has specified
if (userLength >= 8 && userLength <= 128) {
  for(var i=0; i < lowLetters.length; i++) {
    if (userLowercase) {
      values.push(lowLetters[i]);
    }
  }
  for(var i=0; i < upperLetters.length; i++) {
      if (userUppercase) {
        values.push(upperLetters[i]);
      }
  }
  for(var i=0; i < numbers.length; i++) {
      if (userNumeric){
        values.push(numbers[i]);
      }
  }
  for(var i=0; i < specialChar.length; i++) {
      if (userChar) {
        values.push(specialChar[i]);
      }
  }
}
else {
  alert("ERROR: Please refresh page & input a number between 8 & 128 for the number of characters you would like.");
}

console.log("Values: " + values);


// Passwork Generator Function
function generatePassword() {
  var A =[];
  var newWord;

  //create a random PW from "Values" array for a specific length 
  for(var i=0; i < userLength; i++) {
    var random = Math.floor(Math.random() * values.length);
    A[i] = values[random];
  }
  console.log(A); 
  
  newWord = A.join(''); //Make array one word
  console.log("Generated Password: " + newWord);
  return newWord;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
