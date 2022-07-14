//Write a function, "anagrams" that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams.
//Anagrams are strings -words- that contain the same characters in any order.
//Do not use equality === when comparing objects, in JS if we use equality for objects, they check for the same reference in memory, not if they contain the same keys and values

// const anagrams = (s1, s2) => {
//     // todo
//     //use a hash map in JS an object, to find out how many times each character repeats in the string
//     //check if we have the same keys, with the same corresponding values
//     //convert s1 into an object
//     const count = {}

//     //iterate through ever character of the s1 string using a for loop
//     for(let char of s1){
//         //check if the char is NOT in the count object -hash map-
//         //if not in map, initialize it at 0 to start counting the num of that specific char in count
//         if(!(char in count)){
//             count[char] = 0
//         }

//         //despite if the char is or is not in the count object, we still need to increase the count in every iteration
//         count[char] += 1
//     }

//     //iterate through s2, and reduce the count we created with s1, if the result is 0, then we can return true
//     for(let char of s2){
//         //to avoid any errors, first let's check that the char is inside of the count object, if it is, decrease the char count in the object by one
//         if(char in count && count[char] >= 0){
//             count[char] -= 1
//         }
//         //else return false, because there's nothing to reduce if the char doesn't exist in the hash table
//         else {
//             return false
//         }

//     }

//     //for the result, we need to iterate through the count object, to make sure all of the keys have a value of 0, if they do, return true, otherwise return false
//     //use a for in loop, NOT a for of loop, a for in loop in an object, it iterates through the keys of that object
//     for(let char in count){
//         if(count[char] !== 0){
//             return false
//         }
//     }

//     return true

// };


const anagrams = (s1, s2) => {
   //store s1 in a hash map
    let letters = {};
   //add to the hash map
    for (let char of s1) {
        if (!(char in letters)) {
            letters[char] = 0;
        }
        letters[char] += 1;
    };

   //sub from the map
    for (let char of s2) {
        if (char in letters) {
            letters[char] -= 1;
        } else {
            return false;
        }
    };

   //check for 0
    for (let num in letters) {
        if (letters[num] !== 0) {
            return false;
        }
    };

    return true;
};


console.log(anagrams("xy", "xy"))
