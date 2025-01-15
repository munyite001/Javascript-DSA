/**
 * Selection Sort
 *
 * Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.
 *
 * How it works:
 *
 * 1. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array.
 * 2. This process continues moving unsorted array boundary by one element to the right.
 *
 */

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        if (min_index !== i) {
            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }

    return arr;
}


// Example
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // [11, 12, 22, 25, 64]


// Time Complexity: O(n^2)
// Space Complexity: O(1)


