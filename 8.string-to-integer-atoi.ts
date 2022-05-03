/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  s = s.trim();
  if (s.length < 2) return 0;
  return parseInt(s);
}
// @lc code=end
