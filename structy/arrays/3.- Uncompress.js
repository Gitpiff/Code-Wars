// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into
// multiple groups according to the following pattern:<number><char>

// for example, '2c' or '3a' => "cc" or "aaa" The function should return an uncompressed version of the string where each 'char'
// of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according
// to the previously mentioned pattern.

// const uncompress = (s) => {
//     //Tell the function which num chars we are looking for
//     const nums = "0123456789"
//     //Declare a variable, assign it an empty array that will store the uncompressed chars
//     const result = []
//     //Declare two pointers
//     let i = 0
//     let j = 0
//     //move j one value to the left if the current value is not a num
//     //else
//     while(j < s.length){
//         if(nums.includes(s[j])){
//             j += 1
//         } else {
//             const num = Number(s.slice(i, j))
//             for(let count = 0; count < num; count +=1){
//                 result.push(s[j])
//             }

//             j += 1
//             i = j
//         }
//     }

//     return result.join("")
// }

// const uncompress = (s) => {
//     //declare a result var
//     let result = [];
//     //declare a var with the numeric chars
//     const nums = "0123456789";
//     //declare two pointers, i & j, start them at the same index, i will look for nums, j for letters
//     let i = 0;
//     let j = 0;
//     //iterate using a while loop

//     while (j < s.length) {
//       //if j is a number increment j to check if the next char is a number as well
//       if (nums.includes(s[j])) {
//         j += 1;
//       }
//       //when j is not a num, isolate the value to get just the number
//       else {
//         //slice i up to but not incluuiding j, Make it a Number so it only stores in the variable the number value
//         const num = Number(s.slice(i, j));
//         console.log(num);
//         //use a for loop to "uncompress" the number of times the letter repeats
//         for (let count = 0; count < num; count += 1) {
//           //add the letters to the result var
//           result.push(s[j]);
//         }
//         //bring i up to speed
//         j += 1; //move j one index to the right
//         i = j;  //move i to the same index as j so they can start iterating together
//       }
//     }

//     return result.join("");
//   };




const uncompress = (s) => {
    const result = [];
    const nums = '0123456789';
    let i = 0;
    let j = 0;

    while (j < s.length) {
        //check if j is a num
        if (nums.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            //iterate and push the letter num number of times
            for (let count = 0; count < num; count += 1) {
                result.push(s[j]);
            }
            j += 1;
            i = j;
        }

    }

    return result.join("")
}



console.log(uncompress("20c35a11t"))
