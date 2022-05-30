/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  if (target < nums[0] && target > nums[nums.length - 1]) {
    return [-1, -1];
  }
  let first = -1,
    last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && (nums[i - 1] !== target || i === 0)) {
      first = i;
    }
    if (
      nums[i] === target &&
      (nums[i + 1] !== target || i === nums.length - 1)
    ) {
      last = i;
    }
  }
  return [first, last];
}
// @lc code=end
