// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into 
// multiple groups according to the following pattern:<number><char>

// for example, '2c' or '3a' => "cc" or "aaa" The function should return an uncompressed version of the string where each 'char' 
// of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according 
// to the previously mentioned pattern.

const uncompress = (s) => {
    //Tell the function which num chars we are looking for
    const nums = "0123456789"
    //Declare a variable, assign it an empty array that will store the uncompressed chars
    const result = []
    //Declare two pointers
    let i = 0
    let j = 0
    //move j one value to the left if the current value is not a num
    //else 
    while(j < s.length){
        if(nums.includes(s[j])){
            j += 1
        } else {
            const num = Number(s.slice(i, j))
            for(let count = 0; count < num; count +=1){
                result.push(s[j])
            }
            
            j += 1
            i = j
        }
    }

    return result.join("")
}

console.log(uncompress("20c35a11t"))