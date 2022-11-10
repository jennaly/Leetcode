// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//given a string
//return true if the string is a palindrom

//palindrome: the same reversed
//consists only of letters and numbers, no special characters or symbols? => there will be special characters
//case insensitive? "Racecar" = is a palindrome? 
//return true for emtpy string?

//check if s is an empty string, if it is, return true
//filter out special characters and return string consisting of only alphanumeric characters
//transform string to lowercase
//check if reversed string is the same as string

var isPalindrome = function(s) {
    //base case
    if (!s.length) return true 
    
    //filter out special characters and transform to lowercase
    s = s.replace(/[^a-z0-9]gi/, "").toLowerCase()

    //check if s, when reversed, is the same as s
    return s = [...s].reverse().join("")
};