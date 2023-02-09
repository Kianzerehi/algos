const fullName = "Kian Zerehi";
const objectForName = {};
function countChars(str) {
  const name = str.toLowerCase().split(" ").join("");
  for (let i = 0; i < name.length; i++) {
    if (!objectForName[name[i]]) {
      objectForName[name[i]] = 1;
    } else {
      objectForName[name[i]] += 1;
    }
  }
  return objectForName;
}

console.log(countChars(fullName));
