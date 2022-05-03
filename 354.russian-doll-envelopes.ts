/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start

const lis = (arr: number[]): number => {
  const len = arr.length;
  let lis = Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
};

function maxEnvelopes(envelopes: number[][]): number {
  let sorted = envelopes.sort((a, b) =>
    a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]
  );
  return lis(sorted.map((x) => x[1]));
}
// @lc code=end
