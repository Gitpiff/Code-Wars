// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the 
//original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

const isNarcissistic = (num) => {
    let m = 1, count = 0;
    while(num / m > 1){
        m *= 10;
        count++;
    };
    let sum = 0, temp = num;
    while(temp){
        sum += Math.pow(temp % 10, count);
        temp = Math.floor(temp / 10);
    };
    return sum === num;
};

console.log(isNarcissistic(153));
console.log(isNarcissistic(1634));
console.log(isNarcissistic(1433));
console.log(isNarcissistic(342))

// We will first count the number of digits using a while loop. Then with another while loop, 
// we pick last digit of the number and add its (count) th power to a variable sum. After the loop 
// we return a boolean checking whether the sum is equal to the number or not.

