/* 53_maxSubArray 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6

解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。 */



// 滑动窗口，双指针
var maxSubArray = function (nums) {
	var i, //右窗口
		l = 0, //左窗口
		max = nums[0], //最大和
		sum = nums[0] //当前和
	for (i = 1; i < nums.length; i++) {
		sum += nums[i]
		if (sum <= nums[i]) { // 当前和 <= 当前元素，则左窗口滑到当前元素
			l = i
			sum = nums[i]
		}
		if (sum > max) {
			max = sum
		}
	}
	return max
};

// 滑动窗口  优化
var maxSubArray = function (nums) {
	var i,
		max = nums[0],
		sum = nums[0]
	for (i = 1; i < nums.length; i++) {
		sum += nums[i]
		if (sum <= nums[i]) sum = nums[i]
		if (sum > max) max = sum
	}
	return max
};