function panic(str) {
  return str.split(" ").join(" *panic* ").toUpperCase() + "!";
}

//The algo will split sentences into an array seperated by word and will join them with *panic in the middle* while making everything upper case and added an exclamation point to the end
