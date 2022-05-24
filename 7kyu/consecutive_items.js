// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.
//Math.abs() returns the absolute value of a number

consecutive = (arr, a, b) => {
    // Your code here...
    return (Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1)  
}

console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4))