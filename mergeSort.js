//  Mergesort Algorithm

function mergeSort(arr)
{
    // 1. If the array has only one element, it is already sorted, return it.
    if (arr.length == 1)
    {
        return arr;
    }
    // 2. Otherwise, split the array into two halves.
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);

    // 3. Recursively sort each half.
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    // 4. Merge the sorted halves.
    return merge(leftSorted, rightSorted);
}

function merge(left, right)
{
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // 1. While there are elements in both arrays, compare the first element in each array.
    while(leftIndex < left.length && rightIndex < right.length)
    {
        if (left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else
        {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //  2. If all the elements have been pushed from one array, push the remaining elements from the other array.
    while(leftIndex < left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

const randomArr = [5, 3, 6, 2, 10];
console.log(mergeSort(randomArr));