/* 349_intersection 两个数组的交集

给定两个数组，编写一个函数来计算它们的交集。

示例 1
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]

示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]

说明:
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。 */



// 数组方法
var intersection = function (nums1, nums2) {
    var arr = nums1.filter(t => nums2.includes(t))
    return Array.from(new Set(arr))
};

// 数组方法 简化
var intersection = function (nums1, nums2) {
    return Array.from(new Set(nums1.filter(t => nums2.includes(t))))
};

// 数组方法 简化2
var intersection = (nums1, nums2) => Array.from(new Set(nums1.filter(t => nums2.includes(t))))
