// Assignment code here
var specialchar = '!@#$%^&*&()_+',
  digits = '1234567890',
  lowcase = 'abcdefghijklmnopqrstuvwxyz',
  upcase = lowcase.toUpperCase(),
  pdArray = [],
  clength,
  upperCase,
  lowerCase,
  numbers,
  specialCharacters,
  // Get references to the #generate element
  generateBtn = document.querySelector("#generate");

function getPasswordLength() {
  clength = parseInt(prompt("How many charaters are in your password?  Please choose between 8 and 128 characters."));

  // if (!clength){  
  //   do {
  //     clength = parseInt(prompt("Please enter a NUMBER!")); 
  //   }while(!clength); 
  // }else if(clength < 8 || clength > 128){
  //     do{ 
  //       clength = parseInt(prompt("Knuckle Head choose a number between 8 and 128 characters!"));
  //     } while(clength < 8 || clength > 128);
  // }else {
  //   //validate # of characters  
  //   alert("Your password will contain "+clength+" characters.");
  //   }
}

function getPasswordFormat() {
  //confirm if user want to include upperCase
  upperCase = confirm("Do you want your password to include uppercase?");
  //validate uppercase
  if (upperCase === true) {
    alert("Your password will contain uppercase letters");
  } else {
    alert("Your password will NOT contain uppercase letters");
  }
  //confirm if user want to include lowerCase
  lowerCase = confirm("Do you want your password to include lowercase?");
  //validate lowercase
  if (lowerCase === true) {
    alert("Your password will contain lowercase letters");
  } else {
    alert("Your password will NOT contain lowercase letters");
  }
  //confirm if user want to include numbers
  numbers = confirm("Do you want your password to include numbers?");
  //validate numbers
  if (numbers === true) {
    alert("Your password will contain numbers");
  } else {
    alert("Your password will NOT contain numbers");
  }
  //confirm if user want to include special charatrers
  specialCharacters = confirm("Do you want your password to include special charaters?");
  //validate special charaters
  if (specialCharacters === true) {
    alert("Your password will contain special characters");
  } else {
    alert("Your password will NOT contain special characters");
  }
}
// Write password to the #password input
function writePassword() {
  var generateRandom;
  var newPassword = "";
  var options = "";
  //prompt user for # of characters
  getPasswordLength();
  do {
    if (clength < 8 || clength > 128) {
      alert('Invalid password length!  Choose a number between 8 and 128.');
      getPasswordLength();
    }

  } while (clength < 8 || clength > 128);

  getPasswordFormat();
  do {
    if (!upperCase && !lowerCase && !numbers && !specialCharacters) {
      alert('One password option must be selected!');
      getPasswordFormat();
    }

  } while (!upperCase && !lowerCase && !numbers && !specialCharacters)

  // if upperCase is true
  if (upperCase === true) {
    // do something
    options += upcase;
  }

  // if lowerCase is true
  if (lowerCase === true) {
    options += lowcase;
  }

  // if numbers is true
  if (numbers === true) {
    // do something
    options += digits;
  }

  // if specialCharacters is true
  if (specialCharacters === true) {
    // do something
    options += specialchar;
  }



  //Random selection for variables selected and create array
  for (index = 0; index < clength; index++) {
    generateRandom = options.charAt(Math.floor(Math.random() * options.length));
    newPassword += generateRandom;
  }
  return newPassword;

}

generateBtn.addEventListener("click", function () {
  newPassword = writePassword()
  document.getElementById("password").textContent = newPassword;
});
