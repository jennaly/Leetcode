// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

//params: integer array nums
//returns: integer array where each elem equals the product of all the elems in nums except nums[i]
//example: [1,2,3,4] => [24,12,8,6]
//pseudo:
//each elem will be the product of all the numbers appearing before it, and after it
//iterate through nums twice
//first iteration will be making each elem the product of the nums before it
//second iteration will be making each elem the product of the numbs after it

function productExceptSelf (nums) {
    let res = [];
    let multicand = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = multicand;
        multicand *= nums[i];
    }
  
    multicand = 1;
    for (let j = nums.length - 1; j >= 0; j-- ) {
        res[j] *= multicand
        multicand *= nums[j]
    }
    return res
}
