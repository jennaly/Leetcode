// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// given an array called prices, where each element in the array is the price of a given stock on a day
// return the maximum profit from buying the stock at its cheapest and selling the stock at its highest 

// all elements in the aray are numbers?
// only positive integers? no negatives? no floats?
// return 0 if given empty array?
// any duplicates?
// return 0 if there's no max profit (prices trend down)

// base case: if the array is empty, return 0 
// initialize vairbales for the minimum price and maximum profit
// minimum price = prices[0]
// max profit = 0
// iterate through the prices array
// in each iteration, see if the current value is less than the minimum price
// if it is, update the minimum price to be equal to the current value
// see if the difference between the current value and the minimum price is greater than the maximum profit
// if it is, update the maximum profit to be equal to the difference
// return maxmimum profit

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0

    let min_price = prices[0];
    let max_profit = 0;

    for (const price of prices) {
        min_price = Math.min(min_price, price);
        max_profit = Math.max(max_profit, price - min_price);
    }

    return max_profit
};
