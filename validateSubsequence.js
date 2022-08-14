//VALIDATE SUBSEQUENCE

//given two non-empty integer arrays, determine whether the 
//second array is a subsequence of the first
//a subsequence of an array is a set of numbers that aren't 
//necessarily adjacent in the array but that are in the same
//order as they appear in the array

//params: 2 integer arrays
//returns: boolean value - true if second array is a subsequence
//of the first array, false otherwise
//example: ([1,2,3,4], [1,3,4]) => true ; ([1,2,3,4], [2,1,3]) => false
//pseudo:
//use while loop and traverse through both arrays at the same time
//set current index in array1 and current index in sequence outside of the loop
//if array1[i] == array2[i], move to next index in boths arrays
//if not, move to next index in array1
//check if the final value to the current index of sequence is == to its length
//if yes, return true
//if no - at some point, the value of sequenceIndex could not increment 
//because an element in the second array was not seen in the first
//resulting in seqIndex < sequence length
//if the second array is a subsequence of the first,
//the while loop will break when the sequence is iterated through
//if not,
//the while loop will break when array1 is iterated through

function isValidSubsequence(array, sequence) {
    let arrIndex = 0;
    let seqIndex = 0;
    while (arrIndex < array.length && seqIndex < sequence.length) {
        if (array[arrIndex] === sequence[seqIndex]) {
            seqIndex++
        } 
        arrIndex++
    }
    return seqIndex === sequence.length
}
