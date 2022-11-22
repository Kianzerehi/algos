//Palindrome
var isPalindrome = function (x) {
  let palindrome = x.toString().split("").reverse().join("");
  if (palindrome === x.toString()) {
    return true;
  } else {
    return false;
  }
};
//Turned X into a string and reversed it in a variable. Tested to see if it is equal to x (as a string)
