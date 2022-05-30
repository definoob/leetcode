/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  let result = 0;
  let sign;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = -1;
  } else {
    sign = 1;
  }

  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (divisor === 1) return Math.min(Math.max(dividend * sign, min), max);

  while (dividend >= divisor) {
    dividend -= divisor;
    result++;
  }

  return Math.min(Math.max(result * sign, min), max);
}
// @lc code=end
