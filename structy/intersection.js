//Write a function, "intersection" that takes in two arrays (a, b) as arguments.
//The function should return a new array containing elements that are both of the two arrays.
//You may assume that each input array does not contain duplicate elements.

//Solution 1 BRUTE FORCE, DO NOT USE
// const intersection = (a, b) => {
//     //create an empty array that'll hold the final array
//     result = [];

//     //iterate using a for of loop
//     for(let item of a){
//         //conditional, if array b includes any item, push said item to the result array
//         if(b.includes(item)){
//             result.push(item)
//         }
//     }

//     return result
//   };




const intersection = (a, b) => {
    //create a result array
    const result = []
    //create a set of items
    const items = new Set();
    //add items to the set
    for(let item of a){
        items.add(item)
    }
    //iterate through second array, if an element of array 2 is included in the set, push the element to the result array
    for(let ele of b){
        if(b.includes(ele)){
            result.push(ele)
        }
    }

    return result


}

console.log(intersection([1,2,3], [1,2]))
