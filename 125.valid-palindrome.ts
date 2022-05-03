/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    if ((s[i] <= 'z' && s[i] >= 'a') || (s[i] >= '0' && s[i] <= '9')) {
      str.push(s[i]);
    } else if (s[i] <= 'Z' && s[i] >= 'A') {
      str.push(String.fromCharCode(s[i].charCodeAt(0) + 32));
    }
  }
  return str.join('') === str.reverse().join('');
}
// @lc code=end
