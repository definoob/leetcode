/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let res = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
  nums1.splice(0, nums1.length);
  nums1.push(...res);
}
// @lc code=end
