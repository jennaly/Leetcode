// 169. Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 
// given an array "nums"
// return the element that appears more than nums.length / 2 times

// return 0 if given an empty array?
// array consists only of numbers? floats? strings? special characters?
// more than one number in solution?

// iterate through nums
// store each element in the hashmap, if a number has appeared before, increment its value
// iterate through the hashmap, for each number, if its value is greater than nums.length / 2, push it to the output array
// return the output array

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (!nums.length) return 0;

    const hash = {};

    for (const num of nums) {
        if (hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }

    for (const num in hash) {
        if (hash[num] > nums.length / 2) {
            return num
        }
    }

};