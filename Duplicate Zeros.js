//https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
//** Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
//Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            //use the method splice to insert a new zero after the current zero
            arr.splice(i, 0, 0);
            //get rid of the last element since we just inserted a new zero so there's less space in the array
            arr.pop();
            //increment i to skip over the new zero we just inserted
            i+=1
        }
    }
};
// duplicateZeros([1,0,2,3,0,4,5,0])
// duplicateZeros([1,2,3])
// duplicateZeros([0,1,7,6,0,2,0,7])
// duplicateZeros([0,1,7,6,0,2,0,0,0,7])
duplicateZeros([[0,4,1,0,0,8,0,0,3]])
//expected [0,0,4,1,0,0,0,0,8]
