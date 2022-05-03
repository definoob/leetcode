/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hash = {};
  let result: number[] = [];

  nums.forEach((num, i) => {
    if (hash[target - num] !== undefined) {
      result = [hash[target - num], i];
    }
    hash[num] = i;
  });

  return result;
}
// @lc code=end
