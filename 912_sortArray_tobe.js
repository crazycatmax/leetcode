/* 912_sortArray 排序数组

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

示例 2：
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 
提示：
1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000 */



// 内置方法
var sortArray = function (nums) {
  return nums.sort((a, b) => a - b)
};

// 冒泡排序
var sortArray = function (nums) {
  var i,
      j,
      temp,
      isSorted,
      len = nums.length
  for (i = 0; i < len - 1; i++) {
      isSorted = true
      for (j = 0; j < len - 1 - i; j++) {
          if (nums[j] > nums[j + 1]) {
              temp = nums[j]
              nums[j] = nums[j + 1]
              nums[j + 1] = temp
              isSorted = false
          }
      }
      if (isSorted) {
          break
      }
  }
  return nums
};

// 选择排序
// 插入排序
// 鸡尾酒排序

// 归并排序
// 快速排序

// 桶排序
// 计数排序
// 基数排序