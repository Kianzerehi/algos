const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

function emojifyWord(word) {
  if (!word.startsWith(":") && !word.endsWith(":")) return word;
  const slicedWord = word.slice(1, -1);
  if (emojis[slice]) {
    return emojis[slice];
  } else {
    return slice;
  }
}

function emojifyPhrase(phrase) {
  let arrayPhrase = phrase.split(" ");
  return arrayPhrase.map((phrases) => emojifyWord(phrases)).join(" ");
}
