/* 169_majorityElement 多数元素

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:
输入: [3,2,3]
输出: 3

示例 2:
输入: [2,2,1,1,1,2,2]
输出: 2 */



// 借助对象
var majorityElement = function (nums) {
  var i, o = {}
  for (i = 0; i< nums.length; i++) {
    if (!o[nums[i]]) {
      o[nums[i]] = 1
    } else {
      o[nums[i]]++
    }
    if (o[nums[i]] > Math.floor(nums.length / 2)) return nums[i]
  }
  return
};

// 排序后取中间值
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};