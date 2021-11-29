// https://leetcode.com/problems/squares-of-a-sorted-array/
//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    //create a new array to store the squares
    let arr = [];
    //push the squares of the numbers into the array
    for (let i of nums){
        arr.push(i*i)
    }
    console.log(arr)
    //sort the array in non-decreasing order
    arr.sort((a,b) => a-b)
    console.log(arr)
    return arr
};