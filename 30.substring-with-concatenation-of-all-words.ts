/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// "wordgoodgoodgoodbestword"\n["word","good","best","word"]

// @lc code=start

const isComposable = (str: string, words: string[]): boolean => {
  let len = words[0].length;
  let tempWords = [...words];
  for (let i = 0; i < str.length; i += len) {
    let temp = str.slice(i, i + len);
    const index = tempWords.indexOf(temp);
    if (index < 0) return false;
    tempWords.splice(index, 1);
  }
  return true;
};

function findSubstring(s: string, words: string[]): number[] {
  let result = [];
  const subStrLen = words[0].length * words.length;

  for (let i = 0; i <= s.length - subStrLen; i++) {
    let tempStr = s.slice(i, i + subStrLen);
    if (isComposable(tempStr, words)) {
      result.push(i);
    }
  }
  return result;
}
// @lc code=end
