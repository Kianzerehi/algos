//Two Sum Leet Code
let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
//The solution involves a 'for' loop that loops through twice using 'i' and 'j'.
//The 'if' statement creates the condition that if i + j is equal to the target arguement we pass in, then return those two integers in an array.
//Although this will not be the most optimal solution if there were millions of values in the array.
