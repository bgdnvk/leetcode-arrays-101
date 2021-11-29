//https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
//https://leetcode.com/problems/valid-mountain-array/
// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//         arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
     //get the max of the array to know the "top" of the mountain
    let max = Math.max(...arr);
    //get its index as well
    let maxIndex = arr.indexOf(max);
    //debugging 101
    console.log(`max is ${max}`);
    console.log(`maxIndex is ${maxIndex}`);
    //check for edge cases
    if(maxIndex === 0 || maxIndex === arr.length-1){
        return false;
    }
    //iterate through the first half of the "mountain"
    for(let i = 0; i < maxIndex; i++){
        console.log('first half');
        console.log(`is is ${i} i+1 is ${i+1}`);
        //if the mountain isn't strictly increasing, return false
        if(arr[i] > arr[i+1] || arr[i] === arr[i+1]){
            return false;
        }
    }
    //iterate through the second half of the "mountain"
    for(let i = maxIndex; i < arr.length; i++){
        console.log('second half');
        console.log(`is is ${i} i+1 is ${i+1}`);
        //if the mountain isn't strictly decreasing, return false
        if(arr[i] < arr[i+1] || arr[i] === arr[i+1]){
            return false;
        }
    }
    //return true if the mountain is valid
    return true;
};

// console.log(
//     validMountainArray([0,3,2,1])
// );
//expected true

// console.log(
//     validMountainArray([0,1,2,3,4,5,6,7,8,9])
// );

// console.log(
//     validMountainArray([2,1])
// );
console.log(
    validMountainArray([3,5,5])
);
//expects false