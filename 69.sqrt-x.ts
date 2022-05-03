/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;
  let left = 1;
  let right = x;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
}
// @lc code=end
