const password = "123123abcabc";

function removeDupeChars(chars) {
  return [...new Set(chars)].join("");
}

console.log(removeDupeChars(password));
