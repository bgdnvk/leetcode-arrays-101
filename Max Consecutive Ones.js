//Max Consecutive Ones
//https://leetcode.com/problems/max-consecutive-ones/
//Given a binary array nums, return the maximum number of consecutive 1's in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
     //initialize a variable to keep track of the max consecutive ones
    var contmax = 0;
    var cont = 0;
    for(let i = 0; i < nums.length; i++){
        // console.log("i is: "+nums[i]);
        if(nums[i]){
            //simple counter, if there's something in the array then add 1 to the counter
            cont++;
            // console.log("cont is "+cont);
        } else {
            console.log("it's a zero " +i)
            console.log("cont is "+cont)
            //check if the current consecutive ones is greater than the max consecutive ones we have already
            contmax = Math.max(cont, contmax);
            cont = 0;
        }
    }
    // console.log("contmax is "+contmax)
    // this is a ternary operator
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // check which counter is higher and return it in case the last counter is higher
    return cont > contmax ? cont: contmax;
};