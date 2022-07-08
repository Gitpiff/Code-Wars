const zeroSort = (nums) => {
    //two pointers, i start at 0, j start at let j = nums.length -1
    let i = 0;
    let j = nums.length -1;
    //iterate while the pointers don't cross, once i is equal to j the algorithm stops
    // we need j to always point at a num that is not a 0
    while(i <= j){
        if(nums[j] === 0){
            j -= 1
        } else if(nums[i] === 0){
            //if ti is not equal to 0, then swap it
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
            i+=1
        } else {
            //if i is not a 0, then just increment i to the next index
            i+=1
        }
    }
    //check if pointer is equal to 0, if it is, move it to the end of the array by switching it's index
    return nums
}

console.log(zeroSort([0,4,0,6,5,7,0,8,5]))