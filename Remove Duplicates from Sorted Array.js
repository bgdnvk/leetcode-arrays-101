//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3258/
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // nums = [...new Set(nums)]
    // return nums.length
    // doesn't work cuz it has to be in place
    for (let i = 0; i < nums.length; i++) {
        //remove the next element if it's the same as the current element
        if (nums[i] === nums[i + 1]) {
            //use the method splice to remove the element
            nums.splice(i, 1)
            //decrement i to account for the splice
            i--
        }
    }
    
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//mods in place