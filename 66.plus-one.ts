/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let result = [],
    cur = 1,
    temp;

  for (let i = digits.length - 1; i >= 0; i--) {
    temp = digits[i] + cur;
    result.push(temp % 10);
    if (temp >= 10) cur = 1;
    else cur = 0;
  }
  if (cur !== 0) {
    result.push(cur);
  }

  return result.reverse();
}
// @lc code=end
