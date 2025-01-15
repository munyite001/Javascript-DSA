/**
 *
 * How it works:
 * Go through the array, one value at a time.
 * For each value, compare the value with the next value.
 * If the value is higher than the next one, swap the values so that the highest value comes last.
 * Go through the array as many times as there are values in the array.
 */

function bubbleSort(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1])
                {
                    let temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
        }
    }

    return nums;
}

//  Example
let nums = [5, 3, 8, 4, 2];
let sortedNums = bubbleSort(nums);
console.log(sortedNums); // [2, 3, 4, 5, 8]
