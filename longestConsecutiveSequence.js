// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

//given an array of integers
//return the length of the longest consecutive elements sequence

//all the elements in nums are numbers?
//non-emtpy array?
//at least one sequence?

//check if array is empty, if it is, return 0
//create a new Set because it has the .has method that looks for values at constant time
//initialize current number and current max (length of sequence)
//find the number that is the start of a sequence 
//take that number and look up the set to find num + 1
//if it exists, increment current number and current max
//keep finding num + 1 until there's no more to find, currNum is now the greatest in its sequence
//use Math.max to get the current longest sequence, which will be represented by "max" when the function looks for the next sequence
//return the final max value

var longestConsecutive = function(nums) {
    // Handle base case of empty array
    if (!nums.length) return 0;

    // Give ability to look up nums by value
    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        // Starting at the beginning of each sequence
        if (set.has(num - 1)) 
            //If a number still has a value smaller than it (by 1), skip the number, keep iterating through the set
            continue;

        let currNum = num;
        let currMax = 1;

        // Look up numbers that make a consecutive sequence
        while (set.has(currNum + 1)) {
          currNum++;
          currMax++;
        }
        // Update max
        max = Math.max(max, currMax);
    }

    return max;
};
