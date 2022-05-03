/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let result = [],
    cur = 0;
  let aa = a.split('').reverse();
  let bb = b.split('').reverse();
  for (let i = 0; ; i++) {
    if (!aa[i] && !bb[i]) {
      break;
    }
    let temp = (aa[i] ? +aa[i] : 0) + (bb[i] ? +bb[i] : 0) + cur;
    if (temp >= 2) cur = 1;
    else cur = 0;
    result.push(temp % 2);
  }

  if (cur !== 0) {
    result.push(cur);
  }

  return result.reverse().join('');
}
// @lc code=end
