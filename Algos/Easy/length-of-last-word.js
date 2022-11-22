//Length of Last Word
var lengthOfLastWord = function (s) {
  let removedEndSpace = s.trimEnd().split(" ");
  let lastWord = removedEndSpace.length - 1;
  return removedEndSpace[lastWord].length;
};
//I removed spaces at the end of the string and split it into an array. I found the zero based index of the last item in any array and found the length of it
