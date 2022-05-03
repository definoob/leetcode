/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let currIndex: number = nums.indexOf(val);
  while (currIndex > -1) {
    nums.splice(currIndex, 1);
    currIndex = nums.indexOf(val);
  }

  return nums.length;
}
// @lc code=end
