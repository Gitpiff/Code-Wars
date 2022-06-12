//Write a function, "mostFrequentChar", that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string

const mostFrequentChar = (s) => {
    // todo
    //declare a hash table to store the key value pairs of the characters included in the string
    const count = {};

    //check if char is in object, if not initialize it with a value of 0 by using a for of loop
    for(let char of s){
        if(!(char in count)){
            count[char] = 0
        }
        count[char] += 1
    }

    //declare a variable with the initial value of null because they want us to return not the number, but the character itself, so this variable has to be the one that we return
    let freqChar = null

    //look into the keys for the highest value using a for of loop
    //in case of a tie, iterate through the string, find which char came first and return it, don't replace ties
    for(let char of s){
        //to avoid errors, and because we set the initial value of freqChar to null, we need to initialize our if statement with an or conditional
        //this will help replace the initial value of null of the freqChar variable so we don't get an undefined error
        if(freqChar === null || count[char] > count[freqChar]){
            freqChar = char
        }
    }


    return freqChar
};


console.log(mostFrequentChar("Whaaaaleee"))
