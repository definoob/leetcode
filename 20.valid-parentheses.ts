/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: {[key: string]: string} = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (map[last] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// @lc code=end
