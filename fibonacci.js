/**
 * Using iteration, 
 * write a function fibs which takes a number 
 * and returns an array containing that many numbers from the Fibonacci sequence. 
 * Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
 */

function fib(n)
{
    if (n == 0)
    {
        return [];
    }
    else
    {
        if (n == 1)
        {
            return [0];
        }
        else if (n == 2){
            return [0, 1];
        }
        else
        {
            let arr = [0, 1];
            for (let i = 2; i < n; i++)
            {
                arr.push(arr[i - 1] + arr[i - 2]);
            }
            return arr;
        }
    }
}

console.log(fib(8));


function fibsRec(n)
{
    if (n == 1)
    {
        return (0);
    }
    else if (n == 2)
    {
        return (1);
    }
    else
    {
        return fibsRec(n - 1) + fibsRec(n - 2);
    }
}

function fibRecursive(n)
{
    let arr = [];
    for (let i = 0; i < n; i++)
    {
        arr.push(fibsRec(i));
    }
    return arr;
}

console.log(fibRecursive(8));