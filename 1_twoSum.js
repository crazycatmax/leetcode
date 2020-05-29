
/* 1_twoSum 两数之和

给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。
但是，你不能重复利用这个数组中同样的元素。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1] */

    

// 暴力解法for循环遍历
var twoSum = function (nums, target) {
    for (var i = 0, len = nums.length; i < len; i++) {
        // 作差得到第二个数
        var temp = target - nums[i]
        for (var j = i + 1, len = nums.length; j < len; j++) {
            if (nums[j] === temp) {
                return [i, j]
            }
        }
    }
};

// map集合，key值存储数据元素，value存储下标index
var twoSum = function (nums, target) {
    var m = new Map()
    var dif
    for (var i = 0; i < nums.length; i++) {
        dif = target - nums[i]
        if (m.has(dif)) {
            return [m.get(dif), i]
        }
        m.set(nums[i], i)
    }
}

// 数组，value存储下标index
var twoSum = function (nums, target) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        if (arr[dif] !== undefined) {
            return [arr[dif], i];
        }
        arr[nums[i]] = i;
    }
}