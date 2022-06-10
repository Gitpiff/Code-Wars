//Write a function, "fiveSort", that takes in an array of numbers as an argument. The function should rearrange elements of the
//array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original
//array. The function should return an array. Elements that are not 5 can appear in any order in the output, as long as
//all 5s are at the end of the array.

const fiveSort = (nums) => {
    //two pointers, i start at 0, j start at let j = nums.length -1
    let i = 0;
    let j = nums.length -1
    //iterate while the pointers don't cross, once i is equal to j the algorithm stops
    // we need j to always point at a num that is not a 5
    while(i <= j){
        if(nums[j] === 5){
            j -= 1
        } else if(nums[i] === 5){
            //if ti is not equal to 5, then swap it
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
            i+=1
        } else {
            //if i is not a 5, then just increment i to the next index
            i+=1
        }
    }
    //check if pointer is equal to 5, if it is, move it to the end of the array by switching it's index
    return nums
}

console.log(fiveSort([1,4,5,6,5,7,5,8,5]))
