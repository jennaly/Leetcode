// Sorted Square Array
// write a function that takes in a non-empty array
// of integers that are sorted in ascending order 
// and returns a new array of the same length
// with the squares of the original integers also sorted
// in ascending order

// params: a non-empty integer array
// returns: an integer array with elements of the original array squared
// example: [1,2,3,4] => [1,4,9,16]
// pseudo: 
// map through each element in the original array
// where the new array is populated with elements in the original array squared

function sortedSquaredArray (array) {
    return array.map(num => num * num).sort((a,b) => a - b)
}