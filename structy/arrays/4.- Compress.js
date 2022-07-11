const compress = (s) => {
    // todo
    //Declare an empty array that'll hold the result
    let result = [];
    //Declare two pointers i will look for the start of a streak, j will look fo the end of it
    let i = 0; //represents start of streak
    let j = 0;  //represents end of streak
    //use a while loop to iterate through the string
    while(j <= s.length) {
        //check if the char at index i and index j are the same
        if(s[i] === s[j]){
             //if they are, we are on a streak, so move one index to the right by one until the chars don't match
            j += 1
        }
        //if the are not the same char, then;
        else {
            //declare a variable that will count the difference between the index num of j and the index num of i
            //the result of this operation will give us the number of characters that the streak has
            num = j - i
            //if the result is 1, then only push the character to the result array, ex t => t not 1t
            if(num === 1){
                result.push(s[i])
            }
            //if the result is other than 1, then push both the number and the character to the result array
            else{
                result.push(num, s[i])
            }
            // after this, bring pointer i to the same index position as index j to start the process again
            i = j
        }


    }
    //finally join all the chars in the array in the empty space, so we get a string
    return result.join("")
};

// const compress = (s) => {
//     let result = [];
//     //two pointers
//     let i = 0;
//     let j = 0;
//     while (j <= s.length) {
//       //if a streak is found, move j to the right to see if it continues
//       if (s[i] === s[j]) {
//         j += 1;
//       } else {
//         //get the count bu subtracting j from i
//         num = j - i;
//         //base case, if num === 1
//         if (num === 1) {
//           result.push(s[i])
//         } else {
//         result.push(num , s[i]);
//         }
//         i = j;
//       };

console.log(compress("aaabbbyttggnn"))
