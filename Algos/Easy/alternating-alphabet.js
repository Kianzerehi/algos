function altCaps(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
