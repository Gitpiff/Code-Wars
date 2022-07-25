// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

const minChange = (amount, coins) => {
    // dynamic programming with memoization
    const answer = _minChange(amount, coins);
    return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo = {}) => {
    if (amount < 0) return Infinity;

    if (amount === 0) return 0;

    if (amount in memo) return memo[amount];

    let min = Infinity;
    for (let coin of coins) {
      const numCoins = 1 + _minChange(amount - coin, coins, memo);
      min = Math.min(numCoins, min);
    }
    return memo[amount] = min;
};

//a = amount
//c = # coins
//Time: O(a*c)
//Space: O(a)

console.log(13, [1, 9, 5, 14, 30]);
