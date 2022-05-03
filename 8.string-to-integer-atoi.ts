/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const MIN_VALUE = Math.pow(-2, 31);
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const result = Number(s.trimStart().match(/^[-\+]?\d+/));
  if (result < MIN_VALUE) return MIN_VALUE;
  if (result > MAX_VALUE) return MAX_VALUE;
  return result;
}
// @lc code=end
