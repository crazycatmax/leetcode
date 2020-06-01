/* 594_findLHS_tobe 最长和谐子序列

和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

示例 1:
输入: [1,3,2,2,5,2,3,7]
输出: 5
原因: 最长的和谐数组是：[3,2,2,2,3].
说明: 输入的数组长度最大不超过20,000. */



// 
var findLHS = function (nums) {
    var i,
        temp,
        maxLen = 0,
        hash = {}
    for (i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1
        }
    }
    for (i = 0; i < nums.length; i++) {
        temp = hash[nums[i]] + hash[nums[i] + 1]
        if (temp > maxLen) {
            maxLen = temp
        }
    }
    return maxLen
};