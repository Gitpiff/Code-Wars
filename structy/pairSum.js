//Write a function "pairSum" that takes in an array and a target sum as arguments, the function should return an array containing a pair of indices whose elements sum to the given target. the indices returned must be unique.
//Be sure to return the indices, not the elements themselves
//There is guaranteed to be one such pair that sums to the target.

//Solution 1, brute force, DO NOT USE THIS SOLUTION O(n2)
// const pairSum = (nums, target) => {
//     //nested for loops
//     //make sure j starts one index ahead of i than i
//     for(let i = 0; i < nums.length; i ++){
//         for(let j = 1; j < nums.length; j ++){
//             //make a conditional, if we add the indexes of i and j and these are equal to the target, return those indices
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// }




//Solution 2
const pairSum = (nums, target) => {
    //declare a hash map -JS Object-
    const previousNums = {}
    //iterate through the nums, if the num is not in the count object, initialize it, add 1 for every time the num appears in the array
    for(let i = 0; i < nums.length; i ++){
        const num = nums[i]
        const complement = target - num

        //check if the compliment is inside of the previousNums object, have we seen it before? if we did, then we have a pair, return the initial index of i, and as the second number in the pair we need to return the index of the num stored in the previousNum object, to do so give the previousNum object the complement num so it can return it's index
        if(complement in previousNums){
            return [i, previousNums[complement]]
        }


        //Store in the object the index of each num found in the array
        previousNums[num] = i
    }



}


console.log(pairSum([1,2,4,7], 8))
