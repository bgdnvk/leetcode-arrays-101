//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
//Given an array nums of integers, return how many of them contain an even number of digits.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
     //log for debugging
    console.log(...nums)
    //initialize a variable to keep track of the even numbers of digits
    let count = 0;
    //iterate through the array
    for (let num of nums){
        console.log(num.toString().split(''))
        //convert the number to a string to use string methods
        //we can clearly see the number of digits in every number now
        let innerNum = num.toString().split('')
        if (innerNum.length % 2 === 0){
            //if the number of digits is even, add one to the count
            count++
        }
    }
    return count;
};