/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

function generateParenthesis(n: number): string[] {
  let result = [];

  const recurrisve = (currentString: string, currentLength: number) => {
    if (currentString.length == n * 2) {
      result.push(currentString);
      return;
    }
    if (currentLength === n) {
      recurrisve(currentString + ')', currentLength);
      return;
    }
    let arr = currentString.split('');
    let temp = arr.filter((char) => char === '(');
    let temp1 = arr.filter((char) => char === ')');
    if (temp.length > temp1.length) {
      recurrisve(currentString + ')', currentLength);
    }
    recurrisve(currentString + '(', currentLength + 1);
  };

  recurrisve('(', 1);

  return result;
}
// @lc code=end
