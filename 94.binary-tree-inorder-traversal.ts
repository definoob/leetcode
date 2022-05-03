/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 */

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

const recurrsive = (root: TreeNode, result: number[]): number[] => {
  if (root === null) {
    return;
  }
  if (root.left === null && root.right === null) {
    result.push(root.val);
    return;
  }
  recurrsive(root.left, result);
  result.push(root.val);
  recurrsive(root.right, result);
};

function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  recurrsive(root, result);
  return result;
}
// @lc code=end
