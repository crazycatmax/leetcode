/* 209_minSubArrayLen 长度最小的子数组

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，
并返回其长度。如果不存在符合条件的连续子数组，返回 0。

示例: 
输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

进阶:
如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。 */



// 滑动窗口
var minSubArrayLen = function (s, nums) {
    var i,
        j = 0,
        sum = 0,
        minLen = nums.length
    for (i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum < s) continue
        while (sum >= s) {
            sum -= nums[j]
            j++
        }
        minLen = Math.min(minLen, i - j + 2) //(i-j+1)+1 多减了一个数，所以再补加1
    }
    if (j < 1) return 0
    return minLen
};