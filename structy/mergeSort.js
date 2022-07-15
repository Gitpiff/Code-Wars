//Write a function, "mergeSort", that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.


//Divide an conquer, make sure to use MAth.floor when dividing so we always get a whole number
//divide the array
//store in 2 var the left side and right side of it
//we'll need a helper function to help us merge


const mergeSort = (nums) => {
    //if the array contains 0 or 1 element then its already sorted
    if (nums.length <= 1) return nums;

    //split array in half -make sure to get a whole num-
    const mid = Math.floor(nums.length / 2);

    //get the two halves of the array and make the recursive call
    const leftSide = mergeSort(nums.slice(0, mid));
    const rightSide = mergeSort(nums.slice(mid));

    //call the helper merge function
    return merge(leftSide, rightSide);

};

//helper function, get both sides of the array as arguments
const merge = (nums1, nums2) => {
    //reverse the given arrays so we can avoid using .shift() to get the smallest element, by reversing them we get the smallest element from the back of the array
    nums1.reverse();
    nums2.reverse();
    //declare a merged array to store the sorted elements
    const merged = [];

    //iterate through both arguments while they are not empty
    while (nums1.length > 0 && nums2.length > 0) {
        //since we reversed the arrays, check from the back of the array, if nums1 is less than nums2, .pop() it into merged
        if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
            merged.push(nums1.pop());
        }
        //else push nums2
        else {
            merged.push(nums2.pop());
        }
    }

    //after the while loop is done, one of the two arrays will have some elements left behind, take them and push them to merged, make sure to reverse them to their original state before pushing them
    merged.push(...nums1.reverse());
    merged.push(...nums2.reverse());

    //return the merged array
    return merged;
}

const numbers = new Array(120000).fill(7);
console.log(mergeSort(numbers));
