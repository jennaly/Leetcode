// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// given 2 strings, one representing jewels and the other representing stones
// return a number that represents the number of jewels found in the stones

// each letter in the jewels string is a different jewel?
// no duplicate letters in the jewels string?
// letters are case sensitive? i.e. "A" !== "a"
// if stones is an empty string, return 0?
// only letters? no numbers, floats, special characters?

// base case: if stones is an empty string, return 0
// intialize a hash map to keep track of jewels
// iterate through the jewels string, logging each letter in the map 
// initialize an output variable (count of jewels found in stones)
// iterate through the stones string, for each letter, check if it can be found in the hash map, 
// if yes, increment the output variable
// return the output variable


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    if (!stones.length) return 0

    const hash = {};

    for (const letter of [...jewels]) {
        hash[letter] = true;
    }

    let output = 0;

    for (const letter of [...stones]) {
        if (hash[letter]) {
            output++
        }
    }

    return output
};