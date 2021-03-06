/* 35_searchInsert 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0

 */

// l=0
// r=3
// target=2
// nums=[1,3,5,6]



//  二分查找
var searchInsert = function (nums, target) {
    var l = 0,
        r = nums.length - 1,
        m = Math.floor((r + l) / 2)
    if (target > nums[r]) return r + 1
    if (target <= nums[0]) return 0
    while (l <= r) {
        if (target === nums[m]) return m
        if (target < nums[m]) {
            r = m
        } else {
            l = m
        }
        m = Math.floor((r + l) / 2)
        if (l === m) return l + 1
        if (r === m) return r + 1
    }
};