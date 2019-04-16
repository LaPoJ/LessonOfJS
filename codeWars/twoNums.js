var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i],nums[j]);
      if(i!=j && nums[i] + nums[j] == target ) {
        return a = [i, j];
      }
    }
  }
  return a = [];
};
console.log(twoSum([3,2,4],6));