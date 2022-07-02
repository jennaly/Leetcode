//06/28/22
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


//06/29/22
// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 const isAnagram = (s,t) => 
    s.split('').sort().join('')  === t.split('').sort().join('') ? true: false
 
 //param: 2 strings, ordered differently; 
 //returns: boolean value, true if they contain all the same letters, false if they don't
 //question: empty string? 
 //example: 
 //Input: s = "anagram", t = "nagaram" => output: true
 //Input: s = "rat", t = "car" => output: false;
 //pseudo: split strings into letters in array to use array.prototype.sort() 
 //arr.sort() arranges letters in array by alphabetical order
 //join them afterwards into strings again
 //compare if the two strings are exactly alike
 //return true if they are the same, false if not


//07/02/22
//2 SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


 /*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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

//params: array of numbers, target sum
//questions: empty array? 
//returns: array of 2 indices of two numbers that add up to target sum, cannot be the same index
// pseudo:
// create empty object to keep track of numbers that have been looped through
// loop through array once, checking to see if the addend is already in the hash table
// if yes, return the value for the addend key in the hash table and the current index
// if no, add the current number to the hash table as a key and store its current index as the value
// return empty array as default if the loop doesn't return anything