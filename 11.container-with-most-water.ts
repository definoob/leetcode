/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    let tempContainer = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(tempContainer, max);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}
// @lc code=end
