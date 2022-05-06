/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
const firstMissingPositive = (p: number[]): number =>
  [...new Set(p)]
    .filter((a) => a > 0)
    .sort((a, b) => a - b)
    .reduce((prev, cur) => (prev === cur ? prev + 1 : prev), 1);

// @lc code=end
