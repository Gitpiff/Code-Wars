// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    //enter code here
   //Use reduce to sum and a ternary to return the correct answer
   return array.reduce((a, b) => a + b , 0) ? "even" : "odd"
}

console.log(oddOrEven([1, 2, 4, 3, 8]))
