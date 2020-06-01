/* 203_removeElements 移除链表元素

删除链表中等于给定值 val 的所有节点。

示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var removeElements = function (head, val) {
    let newHead = new ListNode(null),
        prev = newHead,
        curr = head;
    newHead.next = head; //哨兵节点

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = prev.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return newHead.next
}