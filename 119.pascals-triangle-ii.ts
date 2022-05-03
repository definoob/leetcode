/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let numRows = rowIndex + 1;
  if (numRows === 1) return [1];
  if (numRows === 2) return [1, 1];

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
  return res[res.length - 1];
}
// @lc code=end
