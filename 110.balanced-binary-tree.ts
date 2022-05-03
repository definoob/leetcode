/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getHeight(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  return (
    Math.abs(getHeight(root.right) - getHeight(root.left)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
// @lc code=end
