/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start

function letterCombinations(digits: string): string[] {
  if (digits === '') {
    return [];
  }
  let key = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let number = digits.split('').map((digit) => key[digit]);
  let result = [...number[0]];
  for (let i = 1; i < number.length; i++) {
    result = result.flatMap((char1) => number[i].map((char2) => char1 + char2));
  }
  return result;
}
// @lc code=end
