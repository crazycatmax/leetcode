/* 21_mergeTwoLists 合并两个有序链表
将两个升序链表合并为一个新的升序链表并返回。
新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4 */



// 递归
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

// 迭代
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    var preHead = new ListNode(-1)
    var head = preHead
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1
            l1 = l1.next
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }
    head.next = l1 ? l1 : l2
    return preHead.next
};