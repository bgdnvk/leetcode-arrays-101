//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/
//https://leetcode.com/problems/remove-element/
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        // use the method splice to remove the element that's equal to val
        nums.splice(i, 1);
        // decrement i by 1 to account for the splice
        i--;
      }
    }
    //since we removed elements from the array we just return the length of the array
    return nums.length;
  };

removeElement([3,2,2,3], 3)