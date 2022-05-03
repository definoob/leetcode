/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      start = Math.max(start, map.get(char) + 1);
    }
    map.set(char, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
// @lc code=end
