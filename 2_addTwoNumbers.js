/* 2_addTwoNumbers 两数相加

给出两个 非空 的链表用来表示两个非负的整数。
其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 链表
var addTwoNumbers = function (l1, l2) {
    var add = false,
        sum,
        prehead = new ListNode(-1),
        head = prehead
    while (l1 || l2) {
        head.next = new ListNode()
        head = head.next
        sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + add
        head.val = sum % 10
        add = sum >= 10
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (add) head.next = new ListNode(1)
    return prehead.next
};