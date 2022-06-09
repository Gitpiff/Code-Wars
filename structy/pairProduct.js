//Write a function, "pairProduct", that takes in an array and a target product as arguments.
//The function should return an array containing a pair of indices whose elements multiply to the given array. The indices return must be unique.
//Return the indices, not the elements.
//There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
    //create a hash table
    const previousNum = {}

    //loop, using a for loop
    for(let i = 0; i < numbers.length; i ++){
        //store the current number
        const num = numbers[i]
        //calculate the complement
         //to find the targetProduct, we need to perform the opposite operation to what's being asked, example if the ask for a * we need to /, for a + do -
        const complement = targetProduct / num


        //conditional, if complement is in the previousNum object, then we have a pair, return indices of i and the complement
        if(complement in previousNum){
            return [i, previousNum[complement]]
        }

        previousNum[num] = i
    }

}

console.log(pairProduct([3, 2, 5, 4, 1], 10))
