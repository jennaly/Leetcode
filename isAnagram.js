
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

//not the bests, because time complexity: O(nlogn)


// ATTEMPT 2 //
//params: 2 strings s and t
//returns: boolean value - true if s and t have the same letters, false if not
//questions: any spaces in the string? case sensitive? 
//example: isAnagram('leon', 'noel') => true
//pseudo: 
//check if strings are the same length => exit if not, saves time 
//make a map and iterate through the first string, storing each letter and their frequency
//iterate through the second string, if there is a letter in the second string that isn't in the first, exit
//if it is in the first string, decrement it in the map
//if there is any his[key] value that is NOT 0, return false 
//otherwise return true
var isAnagram = function(s,t) {
    if (s.length !== t.length) {
        return false
    }
    let hist = {};
    for (let i = 0; i < s.length; i++) {
        if (hist[s[i]]) {
            hist[s[i]]++
        } else {
            hist[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!hist[t[i]]) {
            return false
        } else {
            (hist[t[i]])--; 
        }
    }

    for (let key in hist) {
        if (hist[key]) {
            return false
        }
    }
    return true;
}

//time complexity: O(3n) => O(n)