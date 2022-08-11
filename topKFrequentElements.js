//Top K Frequent Elements
//params: array of integers and k
//returns: an array of k integers that appear the most in the array
//questions:
//empty array? k is <= array.length? integers with same frequency? 
//pseudo:
//hash map to log integers and their frequency
//a bucket array with length = original array + 1
//bucket array with numbers whose frequency == bucket index
//an output array
//iterate through bucket array from last index to first index
//if an array in the bucket array is not empty, push its values to the output array
//check if output.length == k at the end of each iteration
//if true => return output array
//if false => continue iteration

var topKFrequent = function (nums, k) {
    let hash = {};
    let bucket = Array.from({length: nums.length + 1}, () => []);
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for (let num in hash) {
        bucket[hash[num]].push(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach(elem => output.push(elem));
            if (output.length == k) {
                return output
            }
        }
        
    }
    return []
}