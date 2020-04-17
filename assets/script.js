// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

// ARRAY VALUES
// passArray will hold user chosen charaters from other arrays to be included in pass
// =============================================================================
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = [" ", "!", "#", "$", "%", "&", ",", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var passArray = []
 
  
//Number of charaters chosen by user
// validate user is entering a whole number between 8 & 128 and save to len variable
// https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
// ============================================================================== 
var len;

    var len = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(len) || len < 8 || len > 128) len = Number(prompt("Password lenght must be in whole numbers, more than 8 and less than 128 characters. How many characters would you like your password to be?"));
    // console.log(len);

// Ask user what characters to include
// ============================================================================== 
    var lower = confirm("Would you like your password to contain Lower Case letters?")
    var upper = confirm("Would you like your password to contain Upper Case letters?")
    var number = confirm("Would you like your password to contain Numbers?")
    var special = confirm("Would you like your password to contain Special Charaters?")

// Combine the Arrays of the chosen cryteria
// https://dzone.com/articles/ways-to-combine-arrays-in-javascript
// New array *use concat() to join two or more array *var included = lower.concat(upper, number);
// https://www.w3schools.com/jsref/jsref_concat_array.asp
// ============================================================================== 
    if (lower == true) {
      passArray.push(...lowerCase);
    }
    if (upper == true) {
      passArray.push(...upperCase);
    }
    if (number == true) {
      passArray.push(...allNumbers);
    }
    if (special == true) {
      passArray.push(...specialArr);
    }
    // console.log (passArray);

// use random number generator and newArray to generate newPass
// ==============================================================================                                      
    var pass="";
      for (i = 0; i < len; i++) {
        pass += passArray[Math.floor(passArray.length * Math.random())];
      }
      // console.log(pass);

    return pass;
      
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
