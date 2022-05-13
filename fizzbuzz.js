//Prep FizzBuzz
//Take a number 1 to the number, if/3 print fizz, if/5 buzz, 3&5 fizzbuzz
//P ask specifics about the parameter -ex; is it a number? whole, negative?-
//ask specifics about the return value -ex; console log the result-
//give an Example -do you mind if I give you an example?- use test cases
//Use test cases to prove we know and understand the process

function fizzBuzz(num) {
    //Use psedudo code first
    //We need a loop
    //We need conditionals %3&5, %3, %5, 
    //console.log num or fizz, buzz, fizzBuzz

    for(i =1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if(i % 3 === 0){
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else{
            console.log(i)
        }

    }

}


//Test cases
fizzBuzz(15)//1,2,fizz,4,buzz
//fizzBuzz(3)//1,2,fizz
//fizzBuzz(15)//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz