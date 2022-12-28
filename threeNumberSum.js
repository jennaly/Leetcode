// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. The function should find all triplets in
// the array that sum up to the target sum and return a two-dimensional array of
// all these triplets. The numbers in each triplet should be ordered in ascending
// order, and the triplets themselves should be ordered in ascending order with
// respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an
// empty array.

// Sample Input

// array = [12, 2, 1, 2, -6, 5, -8, 6]
// targetSum = 0

// Sample Output

// [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// given an array of numbers and a number representing the sum
// return all the different combinations of numbers that add up to the sum

// return combinations as groupings/subarrays in an array?
// positive and negative integers only? no floats? no strings?
// numbers in subarray sorted?
// subarrays sorted?

// sort the input array in ascending method
// initialize output array
// iterate through input array, intiialize pointers "left" and "right" to the element following it and the last element in the array
// make a while loop that continues until "left" is strictly less than "right"
// the loop finds the triplets in the array that sums to the target sum, starting from the current element at the current index
// if the sum of array[i] + array[i + 1] (left) + array[array.length - 1] is less than the target sum, increment the value of "left"
// if it's greater than the target sum, decrement the value of "right"
// if current == target, push the three elements as an array to the output array and increment "left" and decrement "right"
// return the output array

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);

    const output = [];
  
    for (let i = 0; i < array.length - 2; i++) {
      let left = i + 1;
      let right = array.length - 1;
  
      while (left < right) {
  
        const currentSum = array[i] + array[left] + array[right];
  
        if (currentSum === targetSum) {
          output.push([array[i], array[left], array[right]]);
          left++;
          right--;
        } else if (currentSum > targetSum) {
          right--;
        } else  {
          left++;
        }
      }
    }
  
    return output;
}

// this function has a time complexity of O(n ^ 2) because it has a nested loop
// the space complexity is O(n) because it stores the triplets in an array