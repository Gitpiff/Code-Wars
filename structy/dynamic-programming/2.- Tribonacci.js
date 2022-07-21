// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous three numbers.

// Solve this recursively.

//brute-force (timeout)

const tribonacci = (n) => {
  if (n === 0 || n === 1) return 0;

  if (n === 2) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};
//Time: O(3^n)
//Space: O(n)


console.log(tribonacci(37));