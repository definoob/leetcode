/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let result = '';

  let step = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += step) {
      result += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + step - i < s.length) {
        result += s[j + step - i];
      }
    }
  }

  return result;
}
// @lc code=end
