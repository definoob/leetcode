/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }
  return nums[0];
}
// @lc code=end
