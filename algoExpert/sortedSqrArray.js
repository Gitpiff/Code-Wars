//Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new
//array of the same length with the squares of the original ntegers also sorted incending order


//Solution 1
// function sortedSquaredArray(array) {
//     //Define a variable that will store a new array, initialize it at 0
//     sortedSquares = new Array(array.length).fill(0)

//     //Start a for loop, iterate through the array, take the value at every index, take the sqaure of it, insert it in the
//     //sortedSquares array and sort it
//     for(let i = 0; i < array.length; i ++){
//         let value = array[i]
//         sortedSquares[i] = value * value
//     }

//     sortedSquares.sort((a, b) => a - b)
//     return sortedSquares
// }

//console.log(sortedSquaredArray([5,3,7,11]))



//Solution 2
function sortedSquaredArray(array){
     //Define a variable that will store a new array, initialize it at 0
     const sortedSquares = new Array(array.length).fill(0)

     //Start a "pointer" at the larger and smaller values
     let smallerValueIdx = 0 //since the array is already sorted, this "pointer" will start at 
                             //the index of 0 which will be the smallest number
     let largerValueIdx = array.length - 1 //will traverse the array from right to left

     //Start a for loop, start at the end of the array, which will be the largest number, 
     //until i >= 0, move the pointer backwards -- from right to left, from larger num to smaller num
     for(let i = array.length -1; i >= 0; i--){
         //Declare two variables that will store the index value of each pointer
         let smallerValue = array[smallerValueIdx]
         let largerValue = array[largerValueIdx]
     

     //Run the conditional if the smaller value is greater than the larger value, square the smaller value,
     //store the result in the index of the new array sortedSquares and move the smaller value pointer one value to the right to 
     //find a bigger number
     //else if the larger value is greater than the smaller value, square it, store the result in the index of the in the new array sortedSquares
     //but move the pointer to the left which will contain smaller numbers
     //finally return the new array sortedSquares
        if(Math.abs(smallerValue) > Math.abs(largerValue)){
            sortedSquares[i] = smallerValue * smallerValue
            smallerValueIdx ++
        } else {
            sortedSquares[i] = largerValue * largerValue
            largerValueIdx --
        }
    }

     return sortedSquares
}

console.log(sortedSquaredArray([5,3,7,11]))