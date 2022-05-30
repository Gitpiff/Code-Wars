//Given two non-empty array of integers, write a function that determines whether the second array is a subsequence of 
//the first one
//Subsequence ; a subsequence of a given sequence is a sequence that can be derived from the given sequence by deleting 
//some or no elements without changing the order of the remaining elements. 
//For example the sequence (A,B,D) is a subsequence of (A,B,C,D,E,F) obtained after the removal of C, E, F.
//In order for an array, to be a subsequence of another array, ALL of the elements in the potential subsequence have to
//not only appear in the original array, but they also have to appear in the same order


//Solution 1 -While Loop-
function isValidSubsequence(array, sequence) {
    //Traverse the potential subsequence, because is the thing that we are looking for in the array
    //We'll also have to travere the main array, simply because the subsequence can be present anywhere in the array
    //Initialize a "pointer" on both arrays, run a loop and compare the values of both pointers, if the values are equal, that 
    //means that we have found one of the numbers of the susequence, so we need to move the pointer in the subsequence to the
    //right to start looking for the next number
    arrIdx = 0
    seqIdx = 0
  
    while(arrIdx < array.length && seqIdx < sequence.length) {
    //if we found a match between the arrIdx && seqIdx that means that we have the first number of the subsequence,  only 
    //move the pointer to the next index valueif this condition is met
      if(array[arrIdx] === sequence[seqIdx]) {
        seqIdx += 1
      }
    //regardless of the previous condition, keep moving the arrIdx pointer to the next Index value by one
      arrIdx += 1
    }
  
    return seqIdx === sequence.length
    
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]))