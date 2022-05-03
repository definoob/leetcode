/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  return new RegExp('^' + p + '$').test(s);
}
// @lc code=end
