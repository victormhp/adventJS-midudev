function maxGifts(houses) {
  const dp = new Array(houses.length);

  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < houses.length; i++) {
    dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[houses.length - 1];
}

export { maxGifts };
