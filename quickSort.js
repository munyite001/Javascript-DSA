/**
 *
 * Quick Sort
 *
 * Quick Sort is a divide and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
 *
 * The base case of the recursion are arrays of size zero or one, which are always sorted.
 *
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const left = [];
    const right = [];

    const pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


// Example
const arr = [5, 3, 7, 6, 2, 9];
console.log(quickSort(arr)); // [2, 3, 5, 6, 7, 9]
