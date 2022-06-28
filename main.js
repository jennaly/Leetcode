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