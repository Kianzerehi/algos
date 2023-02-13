const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function removeDupesFromArray(arr) {
  return [...new Set(eggScrambleRecipe)];
}

console.log(removeDupesFromArray(eggScrambleRecipe));

//or

function removeDupesFromArray(arr) {
  const newFoodArray = [];

  arr.forEach((item) => {
    if (!newFoodArray.includes(item)) {
      newFoodArray.push(item);
    }
  });
  return newFoodArray;
}
