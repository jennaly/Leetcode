
// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ATTEMPT NO. 1 //
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

const isAnagram = (s,t) => 
s.split('').sort().join('')  === t.split('').sort().join('') ? true: false

