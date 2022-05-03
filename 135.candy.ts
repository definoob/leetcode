/*
 * @lc app=leetcode id=135 lang=typescript
 *
 * [135] Candy
 */

// @lc code=start
function candy(ratings: number[]): number {
  const len = ratings.length;
  let forward = new Array(len).fill(1);
  let backward = new Array(len).fill(1);
  let sum = 0;

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      forward[i] = forward[i - 1] + 1;
    }
    if (ratings[len - i - 1] > ratings[len - i]) {
      backward[len - i - 1] = backward[len - i] + 1;
    }
  }

  for (let i = 0; i < len; i++) {
    sum += Math.max(forward[i], backward[i]);
  }
  return sum;
}
// @lc code=end
