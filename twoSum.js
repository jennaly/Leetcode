//2 SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 /*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// ATTEMPT NO. 1 //

//params: array of numbers, target sum
//questions: empty array? 
//returns: array of 2 indices of two numbers that add up to target sum, cannot be the same index
// pseudo:
// create empty object to keep track of numbers that have been looped through
// loop through array once, checking to see if the addend is already in the hash table
// if yes, return the value for the addend key in the hash table and the current index
// if no, add the current number to the hash table as a key and store its current index as the value
// return empty array as default if the loop doesn't return anything

let twoSum = function(nums, target) {
    let hash = {}; 
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (hash[target - num] !== undefined) {
            return [hash[target-num], i]
        } else {
            hash[num] = i;   
        }
    }
    return [];  
}

