// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.
/*
 * @param {number[]} nums
 * @return {boolean}
*/

// ATTEMPT NO. 1 //

//params: an array of numbers
//returns: boolean value; true if any number is repeated, false if each only appears once
//question: empty array? number types?
//example: [1,2,3,1] => true

//make a new array
//make a loop
//for each number, check if new array already has it
//if not, add it, if yes, return true
//return false if true wasn't returned

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

// ATTEMPT NO. 2 //
//params: an array of numbers
//returns: boolean value; true if any numbers occurs at least twice in the array; false if every number in the array appeared only once
//ex: Input: nums = [1,2,3,1] => true; Input: nums = [1,2,3,4] => false;
//pseudo: iterate through array and see if an element was already seen before
//create a memory 
//store past elements to memory to reference back to
    //if number was never seen before, put it in memory
    //if the number does exist in memory, return true

var containsDuplicate = function(nums) {
    let memory = {};
    for(let i = 0; i < nums.length; i++) {
        if(!memory[nums[i]]) {
            memory[nums[i]] = "exist";
        } else {
            return true;
        } 
    }
    return false
}

//time complexity = O(N)
//space complexity = O(N)

// ATTEMPT NO. 3 //
//params: an array of numbers
//returns: boolean value; true if any numbers occurs at least twice in the array; false if every number in the array appeared only once
//ex: Input: nums = [1,2,3,1] => true; Input: nums = [1,2,3,4] => false;
//pseudo: 
//sort input array (arrays.sort uses two sorting algos that are both O(n log n));
//iterate though array to compare element at current index to the one before it
//this solution takes up less memory than the one before because there is no memory/storage of data
//may take longer
var containsDuplicate = function(nums) {
    nums.sort((a,b) => {return a-b}); 
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i -1] == nums[i]) {
            return true;
        }
    }
    return false
}
