/* 234_isPalindrome 回文链表

请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 利用数组对节点的值进行判断
var isPalindrome = function (head) {
  var i,
      len,
      arr = []
  while (head) {
      arr.push(head.val)
      head = head.next
  }
  len = Math.floor(arr.length / 2)
  for (i = 0; i < len; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false
  }
  return true
};