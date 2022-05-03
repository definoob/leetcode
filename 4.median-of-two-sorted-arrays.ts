/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let newArray = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        newArray.push(nums1[i]);
        i++;
      } else {
        newArray.push(nums2[j]);
        j++;
      }
    } else if (i < nums1.length) {
      newArray.push(nums1[i]);
      i++;
    } else {
      newArray.push(nums2[j]);
      j++;
    }
  }

  let len = newArray.length;
  if (len % 2 === 1) {
    return newArray[Math.floor(len / 2)];
  } else {
    return (newArray[len / 2] + newArray[len / 2 - 1]) / 2;
  }
}
// @lc code=end
