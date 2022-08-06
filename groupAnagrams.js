//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// ATTEMPT 1 //

//params: an array of strings
//return: an array consisting of groupings of strings that are anagrams (data type of groups: array) => arrays in an array
//example: Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//pseudo:
//sort each word in the array, use the sorted version as the key to identify its anagrams, then group them together
//sort each word in the array, map the sorted words into another array
//make a hash map/table
//iterate through the original array, for each word, check if its sorted equivalent (has the same index number) has already appeared in the map
//if not, store sorted word : [word]
//if yes, push the current word to the value of the sorted word in the map => sorted word : [word1, word2]
//by the end of the iteration, return all the values stored in the map



var groupAnagram = function(strs) {
    const sortedStr = strs.map(str => str.split('').sort('').join(''));
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
        if (!hash[sortedStr[i]]) {
            hash[sortedStr[i]] = strs[i];
        } else {
            hash[sortedStr[i]].push(strs[i]);
        }
    }
    return Object.values(hash)
}