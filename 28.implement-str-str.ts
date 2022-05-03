/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0 || haystack.length === 0) return 0;
  return haystack.indexOf(needle);
}
// @lc code=end
