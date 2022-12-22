// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// given a number n
// return the nth number in the fibonacci sequence

// n is a whole number? not negative? not a float? 
// return or console.log the output?
// each number in the sequence is the sum of the two previous numbers?

// base case: if n is 0 return 0, if n is 1 return 1 because the sequence needs at least 2 numbers to build off of
// iterate from 2 to n
// in each iteration, initilize variables to store the 2 previous numbers and the current number
// by the end of each iteration:
// the current number variable is reassigned the value of the sum of the 2 previous numbers
// prev1 is reassigned the value of prev2
// prev2 is reassigned the value of current number
// after the last iteration:
// return the current number

function fibonacci(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        let prev1 = 0;
        let prev2 = 1;
        let current;

        for (let i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }

        return current;
    }
}

// solution works by iterating from 2 to n and keeping track of the previous 2 numbers (prev1 and prev2);
// at each iteration, it calculates the current number as the sum of the previous 2 numbers and updates the previous numbers accordingly;
// the solution has a time complexity of O(n) where n is the nth Fibonacci number