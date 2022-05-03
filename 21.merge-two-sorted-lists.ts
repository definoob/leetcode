/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      if (head === null) {
        head = list1;
      } else {
        tail!.next = list1;
      }
      tail = list1;
      list1 = list1.next;
    } else {
      if (head === null) {
        head = list2;
      } else {
        tail!.next = list2;
      }
      tail = list2;
      list2 = list2.next;
    }
  }
  if (list1 !== null) {
    tail!.next = list1;
  }
  if (list2 !== null) {
    tail!.next = list2;
  }
  return head;
}
// @lc code=end
