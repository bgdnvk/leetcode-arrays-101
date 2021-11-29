//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
//https://leetcode.com/problems/height-checker/
// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
// Return the number of indices where heights[i] != expected[i].
/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {

    //first copy the array using the spread operator
    //then sort the array to check the differences
    const sorted = [...heights].sort((a,b) => a - b)

    console.log(heights);
    console.log(sorted);
    //counter for the different elements
    let diffCount = 0;
    for(let i = 0; i<heights.length; i++){
        if(heights[i] !== sorted[i]){
            console.log("diff");
            diffCount++;
        }
    }
    console.log(diffCount);
    return diffCount;
};

heightChecker([1,1,4,2,1,3]);