let stringForFunction = "the cat is very hungry";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

//The function takes zero index and capitalizes that letter. We then add the rest of the string by cutting out the first letter and concatenating the string

function capitalizeSentence(string) {
  const newSentence = string.split(" ");
  return newSentence.map((word) => capitalizeWord(word)).join(" ");
}

console.log(capitalizeSentence(stringForFunction));
