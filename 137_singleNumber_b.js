/* 137_singleNumber 只出现一次的数字 II
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,3,2]
输出: 3

示例 2:
输入: [0,1,0,1,0,1,99]
输出: 99 */



// 数组方法 filter
var singleNumber = function (nums) {
  return nums.filter(item => nums.lastIndexOf(item) === nums.indexOf(item))[0]
};

// 暴力循环
var singleNumber = function (nums) {
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