//  function to flatten an array in js

const nestedArray = [
    [1, 2, [3, 4]],
    [5, 6],
    [7, [8, 9]],
  ];
function flatten(arr) 
{
    return arr.reduce((acc, value) => Array.isArray(value) ? acc.concat(flatten(value)) : acc.concat(value), []);
}

console.log(flatten(nestedArray));