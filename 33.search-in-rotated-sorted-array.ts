/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // IMO, no need to use binary search. WHY?
  return nums.indexOf(target);
}
// @lc code=end
