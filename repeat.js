/**
 * Question 9:
    The function should return an array containing repetitions of the number argument. 
    For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, 
    return an empty array.
*/

function repeat(n, num)
{
    let arr = [];
    if (n <= 0)
    {
        return arr;
    }
    else
    {
        arr.push(num);
        return arr.concat(repeat(n - 1, num));
    }
}
console.log(repeat(3, 5));