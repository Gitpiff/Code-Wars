// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {
    //create a variable that will store the maximum value of the array, since we don't know if the array will contain or will be composed of only negative numbers, we should start iterating from "-Infinity" rather than 0, "-Infinity" guarantees to be less than any number
    let maximum = -Infinity

    //iterate through the array, since it's an array we can use a "for of" loop that iterates through every value in the array

    for(let num of nums){
        if(num > maximum) {
            maximum = num
        }
    }

    return maximum

  };


console.log(maxValue([1,5,8,77]))
