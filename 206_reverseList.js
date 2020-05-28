/* 206_reverseList 反转链表

反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 迭代
var reverseList = function (head) {
  var prev = null,
      curr = head
  while (head) {
      head = head.next 
      curr.next =prev
      prev = curr
      curr = head
  }
  return prev
};

// 递归
var reverseList = function (head) {
  if (head === null || head.next === null) return head
  var temp = reverseList(head.next)
  head.next.next = head
  head.next = null
  return temp
};