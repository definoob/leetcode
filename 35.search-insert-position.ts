/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return i;
}
// @lc code=end
