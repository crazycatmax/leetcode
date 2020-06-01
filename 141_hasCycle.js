/* 141_hasCycle 环形链表

给定一个链表，判断链表中是否有环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。*/



// 双指针 快慢指针
var hasCycle = function (head) {
    var fast = slow = head
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow && slow === fast) {
            return true
        }
    }
    return false
};

// 借助 Symbol函数
var hasCycle = function (head) {
    var flag = Symbol()
    while (head) {
        if (head.val === flag) return true
        head.val = flag
        head = head.next
    }
    return false
};