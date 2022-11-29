function reverseWords(s) {
  return s.split("").reverse().join("").split(" ").reverse().join(" ");
}

//The string needed to be seperated by character and then reversed, then joined.
//I had trouble figuring out how to put the string in the original order but know it required another reversal.
//I then became familiar with adding a space in the empty string when i split for a second time
//I once again reversed the string and joined it with a space inbetween the empty string in 'join'
