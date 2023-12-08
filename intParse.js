/**
 * Question 7: Parse a multi-dimensional array
 * Given a multi-dimensional integer array, return the total number of integers stored inside this array
 * Example: input: [1,2,3,[4,5,[6,7],8],9,10,[11,12]]   output: 12
 * @param {Array} arr
 * @return {Number}
 */

//  Solution 1: Recursion

var seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]; // 7

function totalIntegers(arr) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc + totalIntegers(val); // Return the accumulated value when encountering an array
        } else {
            return acc + (Number.isInteger(val) ? 1 : 0); // Return the accumulated value after checking if the value is an integer
        }
    }, 0);
}

console.log(totalIntegers(seven)); // 7

