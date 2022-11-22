//Plus one
let plusOne = function (digits) {
  let numJoin = +digits.join("") + 1; //This will join the array together without turning into a string with the '+' in the beginning and will add one
  let numString = numJoin.toString(); //This will turn into a string to split
  let numSplit = numString.split(""); //This will seperate the characters in the array with commas because of ('')
  let numArray = numSplit.map((str) => {
    return Number(str); //This will map over the array to turn the characters back into a number
  });
  return numArray; //This solution did not pass all tests when dealing with increibly high integers because
  // +digits.join('') would change the last four digits of the integer
};
//Plus one Correct solution
let plusOneC = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //For loop runs to recognize last digit in the array
    if (digits[i] < 9) {
      //Conditional to make digits that dont need carry over to be added
      digits[i] = digits[i] + 1; //
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOneC([6, 5, 5, 5]));
