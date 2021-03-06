/* 217_containsDuplicate 存在重复元素

给定一个整数数组，判断是否存在重复元素。
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true */



// 排序，两两对比
var containsDuplicate = function (nums) {
    var i
    if (nums.length < 2) return false
    nums.sort((a, b) => a - b)
    for (i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true
    }
    return false
}

// set集合去重 通过元素个数判断
var containsDuplicate = function (nums) {
    const tmpSet = new Set(nums);
    return tmpSet.size !== nums.length;
}