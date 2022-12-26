// given an array of positive integers representing the value sof coints in your possession,
// write a function that return sthe minimum amount of change (the minumum sum of money) that you cannot create.
// the given coints can have any positive integer value and aren't necessarily unique
// for example, if you're gien coins = [1, 2 , 5], the minimum amount of change you can't create is 4
// if you're given no coins, the minimum amount of change that you can't create is 1.

// sample input
// coins = [5, 7, 1, 1, 2, 3, 22]

// sample output
// 20

// given an array of coins
// return the minimum of change that cannot be created with the coins

// values in the coins array are numbers?
// not floats? not negative?
// array is non-empty?

// sort array in ascending order
// initialize a variable to store the value of max change that can be created
// iterate through the coins list/array
// in each iteration, check if the coin is greater than maxChange + 1;
// if it is, return maxChange + 1
// if the coin is equal to or less than maxChange, increment the maxChange by the coin value
// return maxChange + 1

function nonConstructibleChange(coins) {
    if (!coins.length) return 1;
  
    coins.sort((a,b) => a - b);
  
    maxChangeCreated = 0;
  
    for (const coin of coins) {
      if (coin > maxChangeCreated + 1) {
        return maxChangeCreated + 1;
      } else {
        maxChangeCreated += coin;
      }
    }
  
    return maxChangeCreated + 1;
    
  }