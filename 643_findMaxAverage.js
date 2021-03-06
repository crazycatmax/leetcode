/* 643_findMaxAverage 子数组最大平均数 I

给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

示例 1:
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 
注意:

1 <= k <= n <= 30,000。
所给数据范围 [-10,000，10,000]。 */



// 暴力循环
var findMaxAverage = function (nums, k) {
    var i,
        j,
        maxAver = -10001,
        sum
    for (i = 0; i < nums.length - k + 1; i++) {
        sum = 0
        for (j = i; j < i + k; j++) {
            sum += nums[j]
        }
        if (sum / k > maxAver) maxAver = sum / k
    }
    return maxAver
};

// 滑动窗口
var findMaxAverage = function (nums, k) {
    var i,
        sum = 0,
        res //最大和
    for (i = 0; i < k; i++) {
        sum += nums[i]
    }
    res = sum
    for (i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        res = Math.max(sum, res)
    }
    return res / k
};