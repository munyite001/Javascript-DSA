/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * How it works using the Euclidean algorithm:
 * The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two numbers.
 * The algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.
 * The algorithm is as follows:
 * 1. If a = 0, then the GCD is b.
 * 2. If b = 0, then the GCD is a.
 * 3. If a = b, then the GCD is a.
 * 4. If a > b, then the GCD is the same as the GCD of a - b and b.
 * 5. If a < b, then the GCD is the same as the GCD of a and b - a.
 * 6. Repeat the process until a = b.
 */

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Example
let a = 10;
let b = 15;
let result = gcd(a, b);
console.log(result); // 5

//  Dynamic GCD
function dynamic_gcd(nums) {
    if (nums.length == 1) {
    return nums[0];
    }
    return gcd(nums[0], dynamic_gcd(nums.slice(1)));
}

//  Example
let nums = [10, 15, 20, 25, 30];
let result_dynamic = dynamic_gcd(nums);
console.log(result_dynamic); // 5
