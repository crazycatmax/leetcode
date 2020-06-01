/* 724_pivotIndex 寻找数组的中心索引

给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

示例 1:
输入: 
nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 
索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。

示例 2:
输入: 
nums = [1, 2, 3]
输出: -1
解释: 
数组中不存在满足此条件的中心索引。

说明:
nums 的长度范围为 [0, 10000]。
任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。 */



// 
var pivotIndex = function (nums) {
    var i,
        temp,
        sumAll = sum(nums, nums.length)
    for (i = 0; i < nums.length; i++) {
        if (sumAll - sum(nums, i) - nums[i] === sum(nums, i)) {
            return i
        }
    }
    return -1
};
var sum = function (arr, n) {
    var res = 0
    while (n > 0) {
        res += arr[n - 1]
        n--
    }
    return res
}

// 
var pivotIndex = function (nums) {
    var i,
        j,
        left,
        right
    for (i = 0; i < nums.length; i++) {
        left = 0
        right = 0
        for (j = 0; j < i; j++) {
            left += nums[j]
        }
        for (j = i + 1; j < nums.length; j++) {
            right += nums[j]
        }
        if (left === right) return i
    }

    return -1
};

// 
var pivotIndex = function (nums) {
    var i,
        left = 0,
        right = 0
    if (nums.length === 0) return -1
    if (nums.length === 1) return 0
    for (i = 1; i < nums.length; i++) {
        right += nums[i]
    }
    if (right === 0) return 0
    for (i = 1; i < nums.length; i++) {
        right -= nums[i]
        left += nums[i - 1]
        if (right === left) return i
    }
    return -1
};

// 
var pivotIndex = function (nums) {
    var i,
        left = 0,
        right = 0,
        sum = 0
    for (i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    right = sum
    for (i = 0; i < nums.length; i++) {
        right -= nums[i]
        left = sum - right - nums[i]
        if (right === left) return i
    }
    return -1
};