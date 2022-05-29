// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
//Create a variable that will store the value of the sum coming from the squares of each num
    let nums = 0
 
//Use a forEach() method, pass a number, add to the nums variable the result of the square of each num
    numbers.forEach(number => {
        nums += number * number
    })

//Return nums
    return nums
}

console.log(squareSum([1, 2, 2]))