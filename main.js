// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.
/*
 * @param {number[]} nums
 * @return {boolean}
*/

 var containsDuplicate = function(nums) {
    let arr = [];
    for (let i = 0; i <= nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};

//params: an array of numbers
//returns: boolean value; true if any number is repeated, false if each only appears once
//question: empty array? number types?
//example: [1,2,3,1] => true

//make a new array
//make a loop
//for each number, check if new array already has it
//if not, add it, if yes, return true
//return false if true wasn't returned


