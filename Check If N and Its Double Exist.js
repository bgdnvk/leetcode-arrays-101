//https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
//https://leetcode.com/problems/check-if-n-and-its-double-exist/
//Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    //make a flag to check if there is a double
    //update it if it exists
    let res = false;
    console.log(`arr is ${arr}`);
    //use forEach to iterate through all the elements in the array
    arr.forEach( (e, i) => {
        //check if the double of e exists in the array with indexOf
        if(arr.indexOf(e*2) !== -1){
            //check we are not iterating over the same element
            if(arr.lastIndexOf(e*2) !== arr.indexOf(arr[i])){
                res = true
            }
            }
        }
    )
    return res
};



//wrong [-2,0,10,-19,4,6,-8]
//expect false
// checkIfExist([-2,0,10,-19,4,6,-8])

//wrong [0,0]
//expect true
// checkIfExist([0,0])

// checkIfExist([10,2,5,3])
//expected true