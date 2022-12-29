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
//   calculate the ASCII code of the new character by adding the key to the ASCII code of the current character
//   if the ASCII code of the new character is greater than 122, get the remainder of the division of the new character by 122 (122 is the code for z)
//   add the remainder to 96 (the code for a)
//   map the character to a new array
//   join the characters in the array and return as a string

function caesarCipherEncryptor(string, key) {
    if (!string.length) return "";

    const newString = [...string].map(char => 
        {
            let newChar = char.charCodeAt(0) + key;

            if (newChar > 122) {
                newChar = 96 + (newChar % 122);
            }

            return String.fromCharCode(newChar);
        })
        .join("")

    return newString;
}