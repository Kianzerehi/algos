const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

function reverseString(arr) {
  return arr.split("").reverse().join("");
}

function reverseStringsInArray(arr) {
  return messages.map((message) => reverseString(message));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
