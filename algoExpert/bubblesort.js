//Given two non empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
//A subsequence of an array is a set of numbers that aren't neccessarily adjacent in the array but that are in the same order as they appear in the array. For instance the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4, 5], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

//while loop solution
const isValidSubsequence = (array, subsequence) => {
    //two pointers
    let i = 0;
    let j = 0;

    while (i < array.length && j < subsequence.length) {
        if (array[i] === subsequence[j]) {
            //found a match, move to the next element in the subsequence
            j += 1;
        }
        //regardless of finding a match or not, keep the array pointer moving to the next element
        i += 1;
    }

    return j === subsequence.length;

};



console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]));