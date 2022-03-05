
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase; //variables 
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]; //listed variables
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var numberChars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialChars = [ "!", "&", "@", "~", "^", "#" ];


// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.


// Provided by instructor
function generatePassword(){ //a block of code designed to generate password
  var randomChar = [];
  var finalResult = "";  //shows final result of password after completing prompts
  
  
  function askAboutPasswordCharCount(){
    passwordCharacterCount = window.prompt("Input a password length between 8 and 128 characters. "); //Asks the question 
    return passwordCharacterCount; 
  }
    askAboutPasswordCharCount(); //displays question prompt
    

  function askAboutUppercase(){
    allowUppercase = confirm("Are upper case characters allowed?"); 
    console.log(allowUppercase);
  }
  askAboutUppercase(); 
  if (allowUppercase){  //if statement
    randomChar.push(uppercaseChars.join("")); //creates and returns new string by concatenating all of the elements
  }
  
  
  function askAboutLowerCase(){ 
    allowLowerCase = confirm("Are lower case characters allowed?"); //code inside curly brackets is code to be executed
    console.log(allowLowerCase);
  }
  askAboutLowerCase();
  if (allowLowerCase){
    randomChar.push(lowercaseChars.join(""));
  }
  
  
  function askAboutNumbers(){
    allowNumbers = confirm("Are number characters allowed?");
    console.log(allowNumbers); //console.log method outputs a message to the web console
  }
  askAboutNumbers();
  if (allowNumbers){
    randomChar.push(numberChars.join(""));
  }
  
  
  function askAboutSpecials(){
    allowSpecials = confirm("Are special characters allowed?");
    console.log(allowSpecials);
  }
  askAboutSpecials();
  if (allowSpecials){ //if statement used to specify a block of code to be executed, if true
    randomChar.push(specialChars.join(""));
  }
  
  
  const newCharArray = randomChar.toString();
  
  
  for (var i=1; i<=passwordCharacterCount; i++){ //for loop used to execute a block of code a number of times
    var randomIdx = Math.floor(Math.random() * newCharArray.length);
    finalResult += newCharArray[randomIdx];
  }

  return finalResult;  //ends the function execution and specifies a value to be returned to the function
}

// HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

// HINT: You may want to look into merging arrays together


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //returns the first element in the document that matches the specified set of CSS selectors
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
