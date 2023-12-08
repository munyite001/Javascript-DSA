/**
 * Question 8:
 * Write a function that sums squares of numbers in list that may contain more lists
 * 
 * Example:

    var l = [1,2,3]; 
    console.log(SumSquares(l)); // 1 + 4 + 9 = 14

    l = [[1,2],3]; 
    console.log(SumSquares(l)); // 1 + 4 + 9 = 14

    l = [[[[[[[[[1]]]]]]]]] 
    console.log(SumSquares(l)); // 1 = 1

    l = [10,[[10],10],[10]] 
    console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
 */

function sumSquares(arr)
{
    return arr.reduce((acc, val) => {
        if (Array.isArray(val))
        {
            return acc + sumSquares(val);
        }
        else
        {
            return acc + (val * val);
        }
    }, 0)
}

const myArr = [10,[[10],10],[10]];

console.log(sumSquares(myArr)); // 14