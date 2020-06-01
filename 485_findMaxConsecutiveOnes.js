/* 485_findMaxConsecutiveOnes 最大连续1的个数

给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.

注意：
输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。 */



// 字符串数组方法
var findMaxConsecutiveOnes = function (nums) {
    var i,
        max = 0,
        arr = nums.join('').split('0').map(t => t.length)
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
};

// 遍历一遍
var findMaxConsecutiveOnes = function (nums) {
    var i,
        count = 0,
        max = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i]) {
            count++
        } else {
            if (count > max) max = count
            count = 0
        }
    }
    if (count && count > max) max = count
    return max
};

// 遍历一遍 优化
var findMaxConsecutiveOnes = function (nums) {
    var i,
        j = 0,
        max = 0
    for (i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            max = Math.max(i - j, max)
            j = i + 1
        }
    }
    return Math.max(i - j, max)
};