/* 23_mergeKLists 合并K个排序链表

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
示例:
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6 */



// 分治算法，将K个链表合并化为 k-1次两个链表合并
var mergeKLists = function (lists) {
  if (lists.length < 1) return null
  return lists.reduce((acc, cur) => mergeTwoLists(acc, cur))
};
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

// 借助数组sort方法进行排序
var mergeKLists = function (lists) {
  var i,
    len,
    arr = [],
    preHead = new ListNode(-1),
    head = preHead
  lists.forEach(list => {
    while (list) {
      arr.push(list.val)
      list = list.next
    }
  })
  arr.sort((a, b) => b - a)
  len = arr.length

  while (len--) {
    head.next = new ListNode(arr[len])
    head = head.next
  }
  return preHead.next
};