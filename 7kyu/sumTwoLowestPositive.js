// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 
// positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {  
    //Sort the array, pass a fx as a param to sort it from small num to positive num
   let result =  numbers.sort((a, b) => a - b)
    
   //return the sum of the first two indexes
   return result[0] + result[1]
  

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))