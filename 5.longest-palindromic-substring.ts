/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start

const isPalindrome = (s: string) => s === s.split('').reverse().join('');

function longestPalindrome(s: string): string {
  if (s.length === 0) return '';
  if (s.length === 1) return s;
  let max = '';
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLen) {
        max = s.slice(l, r + 1);
        maxLen = max.length;
      }
      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLen) {
        max = s.slice(l, r + 1);
        maxLen = max.length;
      }
      l--;
      r++;
    }
  }
  return max;
}
// @lc code=end
