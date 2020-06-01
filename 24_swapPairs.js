/* 24_swapPairs 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3. */



// 递归 
var swapPairs = function (head) {
    if (!head || !head.next) { //排除 边界条件
        return head
    }
    var next = head.next.next //记录 下一轮的链表
    var newHead = head.next //次节点
    newHead.next = head
    head.next = swapPairs(next) //接收 下一轮的链表返回的头节点
    return newHead //将交换后的头节点返回
};

// 递归 优化
var swapPairs = function (head) {
    if (!head || !head.next) return head
    var temp = head.next
    head.next = swapPairs(head.next.next)
    temp.next = head
    return temp
};