/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start

const inRange = (num: number): boolean =>
  num >= Math.pow(-2, 31) && num <= Math.pow(2, 31) - 1;

function reverse(x: number): number {
  let result =
    (x < 0 ? -1 : 1) *
    parseInt(Math.abs(x).toString().split('').reverse().join(''));

  return inRange(result) ? result : 0;
}
// @lc code=end
