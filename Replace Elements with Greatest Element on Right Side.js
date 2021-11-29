//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
     console.log(arr);
    for(let i = 0; i < arr.length-1; i++){
        //assign max as the next element to check
        let max = arr[i+1];
        //iterate through the right side of the array
        for(let j = i+1; j<arr.length; j++){
            //check if there's an element that's greater than the current max
            if(arr[j] > max){
                max = arr[j];
            }
        }
        //put the max element as you finish the array
        arr[i] = max;
    }
    //put the last element as -1 since the problem asks for it
    arr[arr.length-1] = -1;
    return arr;
};
console.log(
    replaceElements([17,18,5,4,6,1])
);