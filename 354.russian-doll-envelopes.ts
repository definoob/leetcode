/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start

function maxEnvelopes(envelopes: number[][]): number {
  envelopes = envelopes.sort((a, b) =>
    a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]
  );
  let len = envelopes.length,
    dp = [];
  for (let i = 0; i < len; i++) {
    let height = envelopes[i][1],
      left = 0,
      right = dp.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (dp[mid] >= height) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    dp[left] = height;
  }
  return dp.length;
}
// @lc code=end
