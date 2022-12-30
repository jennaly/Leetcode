//   Given a non-empty string of lowercase letters and a non-negative integer
//   representing a key, write a function that returns a new string obtained by
//   shifting every letter in the input string by k positions in the alphabet,
//   where k is the key.


//   Note that letters should "wrap" around the alphabet; in other words, the
//   letter z shifted by one returns the letter a.

//   Sample Input
//   string = "xyz"
//   key = 2

//   Sample Output
//   "zab"

//   given a string of lowercase letters and a non-negative integer representing a key
//   return a string where each letter is [key] letters following it in the alphabet

//   string is non-empty?
//   number is non-negative?
//   only letters, no special characters?
//   no spaces?

//   iterate through each character in the given string
//   calculate the ASCII code of the new character by adding the key to the ASCII code of the current character % 26
//   if the ASCII code of the new character is greater than 122, subtract 26 from the character code
//   get the new character from the new character code by using String.fromCharCode();
//   map the character to a new array
//   join the characters in the array and return as a string

function caesarCipherEncryptor(string, key) {
    if (!string.length) return "";
   
     if (key === 0) return string;
   
     const newString = [...string].map(char => 
         {
             let newChar = char.charCodeAt(0) + (key % 26);
   
             if (newChar > 122) {
                 newChar -= 26; 
                
                // If newChar is greater than 122, it means that the new character is not in the alphabet, and it needs to be "wrapped" around the alphabet.
                // To "wrap" the new character around the alphabet, 26 is subtracted from newChar. 
                // This has the effect of "moving" the new character 26 positions to the left in the alphabet, which is equivalent to wrapping it around the alphabet.
             }
   
             return String.fromCharCode(newChar);
         })
         .join("")
   
     return newString;
}

//   this solution has a time complexity of O(n) where n is the length of the string
