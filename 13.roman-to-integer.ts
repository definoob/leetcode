/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const defaultNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (defaultNumbers[s[i]] < defaultNumbers[s[i + 1]])
      sum -= defaultNumbers[s[i]];
    else sum += defaultNumbers[s[i]];
  }
  return sum;
}
// @lc code=end
