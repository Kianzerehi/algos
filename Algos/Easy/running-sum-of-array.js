//1480. Running Sum of 1d Array
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
};
//I ran a for loop that began at index 1 since index 0 will not need to be added to anything. The function adds nums[i] to the number before nums[1] by using -1
