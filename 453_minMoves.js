/* 453_minMoves 最小移动次数使数组元素相等

给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。

示例:
输入:
[1,2,3]
输出:
3

解释:
只需要3次移动（注意每次移动会增加两个元素的值）：

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4] */



// 求的每一个数与最小数的差值，对差求和
var minMoves = function (nums) {
  var i,
    min = nums[0],
    sum = 0
  for (i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i]
  }
  for (i = 0; i < nums.length; i++) {
    sum += nums[i] - min
  }
  return sum
}