/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let res = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    let temp = new Array(i);
    temp[0] = 1;
    for (let j = 1; j < i - 1; j++) {
      temp[j] = res[i - 2][j - 1] + res[i - 2][j];
    }
    temp[i - 1] = 1;
    res.push(temp);
  }
  return res;
}
// @lc code=end
