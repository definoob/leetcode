/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

function climbStairs(n: number): number {
  let a = 1;
  let b = 1;
  while (n--) {
    b += a;
    a = b - a;
  }
  return a;
}
// @lc code=end
