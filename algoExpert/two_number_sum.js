//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any of the two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
//If no two numbers sum up to the target sum, the function should return an empty array.
//Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
//you can assume that there will be at most one pair of numbers summing up to the target sum.

//Solution 1 -for loops-

function twoNumberSum(array, targetSum){
    //we need two "pointers" -for loops- that will iterate from left to right and right to left
    //create a variable in each for loop to store the value of each number in the array, so we'll need two variables, firstNum and secondNum
    //if the sum of firstNum and secondNum equals the targetSum return an array containing the values of firstNum and secondNum
    //if no numbers in the array can produce the value of targetSum, return an empty array
    for(let i = 0; i < array.length - 1; i ++){
        const firstNum = array[i]

        for(let j = i + 1; j < array.length; j ++){
            const secondNum = array[j]

            if(firstNum + secondNum === targetSum){
                return [firstNum, secondNum]
            }
        }
    }

    return []

}

console.log(twoNumberSum([5,2,3], 5))


//Solution 2 -hash tables-

function twoNumberSum(array, targetSum) {
    //create an object -hash table-
    nums ={}

    //run a for of loop
    //create an if conditional, looking for the number that is the result of targetSum-num in the nums object, if found, return it along with the num value
    //else store the num value in the nums object with the value of true
    for(const num of array){
        if(targetSum - num in nums){
            return [targetSum - num, num]
        } else {
            nums[num] = true
        }
    }

    return []
}

console.log(twoNumberSum([5,2,3], 5))



//Solution 3 while loop

function twoNumberSum(array, targetSum){
    //sort the array in ascending order
    array.sort()

    //we need two "pointers" -for loops- that will iterate from left to right and right to left
    let left = 0
    let right = array.length - 1


    //condition the while loop, as long as left is less tha right, never equal so they dont run into each other
    //create a variable that will store the sum of the values of each pointer
    //create a conditional checking if the sum of both pointers is equal to the targetSum, if it is return an array with the values of both pointers
    //otherwise if the sum of the pointers is less than the targetSum move the left pointer one value to the left to a higher value number, ex from a 9 to a 10
    //if the sum of the pointers is greater than the targetSum, move the right pointer to the right one value to a lesser value number, ex from a 10 to a 9
    while(left < right){
        const currentSum = array[left] + array[right]
        if(currentSum === targetSum){
            return [ array[left], array[right] ]
        } else if(currentSum < targetSum){
            left += 1
        } else if(currentSum > targetSum){
            right -= 1
        }
    }

    return []
}


console.log(twoNumberSum([5,2,3], 5))
