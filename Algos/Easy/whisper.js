function whisper(str) {
  if (str.endsWith("!")) {
    return "shh..." + str.slice(0, -1).toLowerCase();
  } else return "shh... " + str.toLowerCase();
}
