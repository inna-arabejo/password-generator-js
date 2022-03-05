
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var numberChars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialChars = [ "!", "&", "@", "~", "^", "#" ];

// Provided by instructor







// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var randomChar = [];
  var finalResult = "";
  
  
  function askAboutPasswordCharCount(){
    passwordCharacterCount = window.prompt("Input a password length between 8 and 128 characters. ");
    return passwordCharacterCount;
  }
    askAboutPasswordCharCount();

    // var charValidation = false;
    // if ((passwordCharacterCount <  8) || (passwordCharacterCount > 128))
    // alert("Password length must be between 8 and 128 characters. ");
    // else if ((!askAboutUppercase)&&(!askAboutLowerCase)&&(!askAboutNumbers)&&(!askAboutSpecials))
    // alert("No password generated.");
    // charValidation = true;
    


  
    function askAboutUppercase(){
    allowUppercase = confirm("Are upper case characters allowed?");
    console.log(allowUppercase);
  }
  askAboutUppercase(); // ask the questions first
  

  if (allowUppercase){
    randomChar.push(uppercaseChars);
  }
  
  
  function askAboutLowerCase(){
    allowLowerCase = confirm("Are lower case characters allowed?");
    console.log(allowLowerCase);
  }
  askAboutLowerCase();
  if (allowLowerCase){
    randomChar.push(lowercaseChars);
  }
  
  
  
  function askAboutNumbers(){
    allowNumbers = confirm("Are number characters allowed?");
    console.log(allowNumbers);
  }
  askAboutNumbers();
  if (allowNumbers){
    randomChar.push(numberChars);
  }
  
  
  
  function askAboutSpecials(){
    allowSpecials = confirm("Are special characters allowed?");
    console.log(allowSpecials);
  }
  askAboutSpecials();
  if (allowSpecials){
    randomChar.push(specialChars);
  }
  
  
  
  
  const newCharArray = randomChar.toString();
  
  
  for (var i=1; i<=passwordCharacterCount; i++){
    var randomIdx = Math.floor(Math.random() * newCharArray.length);
    finalResult += newCharArray[randomIdx];
  }

  return finalResult;
}




// HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

// HINT: You may want to look into merging arrays together


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
