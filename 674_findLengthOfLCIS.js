/* 674_findLengthOfLCIS 最长连续递增序列

给定一个未经排序的整数数组，找到最长且连续的的递增序列。

示例 1:
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 

示例 2:
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
注意：数组长度不会超过10000。 */



// 
var findLengthOfLCIS = function (nums) {
    var i,
        len = -1,
        res = []
    if (nums.length === 0) return 0
    res.push(nums[0])
    if (nums.length === 1) return res[0]
    for (i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            res.push(nums[i])
        } else {
            if (res.length > len) len = res.length
            res.length = 0
            res.push(nums[i])
        }
    }
    return Math.max(len, res.length)
};

var findLengthOfLCIS = function (nums) {
    var i,
        len = 0,
        count = 0
    if (nums.length === 0) return 0
    count++
    if (nums.length === 1) return nums[0]
    for (i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            count++
        } else {
            if (count > len) len = count
            count = 1
        }
    }
    return Math.max(len, count)
};