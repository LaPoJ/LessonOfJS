/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var new_nums = nums1.concat(nums2).sort( (num1, num2) => {
    return num1 - num2;
  });
  if (new_nums.length%2 == 1) {
    return new_nums[(new_nums.length-1)/2];
  }else{
    return (new_nums[new_nums.length/2 - 1] + new_nums[new_nums.length/2])/2;
  }
  // return new_nums.length%2 == 1 ? new_nums[(new_nums.length-1)/2] : (new_nums[new_nums.length/2 - 1] + new_nums[new_nums.length/2])/2;
};

nums1 = [1, 3]
nums2 = [2]

console.log(findMedianSortedArrays(nums1,nums2));

nums3 = [3]
nums4 = [-2, -1]

console.log(findMedianSortedArrays(nums3,nums4));
