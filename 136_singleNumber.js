/* 136_singleNumber 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4 */



// 数组 filter方法
var singleNumber = function (nums) {
  return nums.filter(item => nums.lastIndexOf(item) === nums.indexOf(item))[0]
};

// 暴力循环
var singleNumber2 = function (nums) {
  var i, j
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i] && j !== i)
        break
    }
    if (j === nums.length)
      return nums[i]
  }
};

// 排序 找出不等于前后元素的元素
var singleNumber3 = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[0] !== nums[1]) return nums[0]
  if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1]
  return nums.filter((t, i) => t !== nums[i - 1] && t !== nums[i + 1])[0]
}

// 异或运算^  x^x=0 x^0=x
var singleNumber4 = function (nums) {
  var res, num
  for (num of nums) {
    res ^= num
  }
  return res
};