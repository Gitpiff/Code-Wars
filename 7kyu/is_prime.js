// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself. 2 is the smallest prime number

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

const isPrime = (n) => {
    //Iterate through "n" trying to find if "n" is divisible by any other number than 1 or "n"
    //First we need to iterate through the number
    //Start the for loop at 2 up to "< n" less than "n" since we know n is divisible by  itself, and we start the loop at 2 and not 1 because all numbers are divisible by 1
    //Find if its divisible by any other number other than 1 or itself, if it is return false.

    if(n <2){
        return false    //if n is equal to 1, that means that n is not a prime number
    }


    for(let i = 2; i < n; i ++){
        if(n % i === 0){    //if n can be divided by any number between 2 and n,
            return false    //then n is not a prime number
        }
    }

    return true     //We don't need to return an else statement, we know if n can pass
                    //the previous conditional, then n is a prime number
}

console.log(isPrime(7))
console.log(isPrime(17))
console.log(isPrime(10))
console.log(isPrime(2))
console.log(isPrime(5))
