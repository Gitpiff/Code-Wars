// Reverse a string "Hello" => "olleH"
//Solution one -in one line-
function solution2(str){
    return str.split("").reverse().join("") //methods can be chained
}

//Solution two -using methods and variables-
function solution1(str){
    let strArr = str.split("")     //converts string into an array by splitting the string in the char passed as an argument
    let reversedArr = strArr.reverse()      //use .reverse() method to reverse array
    let reversedStr = reversedArr.join("")      //convert array to string by joining the array in the char passed as an argument
    return reversedStr
}

//Solution three -using a for loop-
function solution3(str){
    let final = ""      //create variable that will store final value

    for(let i = str.length -1; i >= 0; i --){       //loop goes in descending order i -- while i >= 0
        final += str[i]                             //add i value to final variable one char at the time
    }

    return final
}

console.log(solution3("whale"))