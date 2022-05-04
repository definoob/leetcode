/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start

const valus = {
  1: 'I',
  5: 'V',
  4: 'IV',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

function intToRoman(num: number): string {
  let result = '';
  for (let i = Object.keys(valus).length - 1; i >= 0; i--) {
    const key = Object.keys(valus)[i];
    const value = valus[key];
    while (num >= parseInt(key)) {
      result += value;
      num -= parseInt(key);
    }
  }
  return result;
}
// @lc code=end
