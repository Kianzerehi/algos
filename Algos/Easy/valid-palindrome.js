/* Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let regexPattern = /[^A-Za-z0-9]/g;
  let palindrome = s
    .toLowerCase()
    .replace(regexPattern, "")
    .split("")
    .reverse()
    .join("");
  let originalString = s.toLowerCase().replace(regexPattern, "");
  if (palindrome === originalString) {
    return true;
  } else {
    return false;
  }
}; //I removed all the non-alphanmeric characters as instructed and then made sure all characters were lowercase.
//I then split the characters into an array, reverse,then combined again. I made sure the original string was turned lowercase and removed all the non-alphanumeric numbers.I set up an 'if' statement to be sure the string returns true or false
