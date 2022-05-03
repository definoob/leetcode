/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const arr = x.toString().split('');
  return arr.join('') === arr.reverse().join('');
}
// @lc code=end
