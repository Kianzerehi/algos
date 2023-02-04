function isAnagram(str1, str2) {
  let wordOne = str1.split("").sort().join("");
  let wordTwo = str2.split("").sort().join("");
  console.log(wordOne);
  console.log(wordTwo);
  if (wordOne == wordTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
