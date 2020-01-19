/* 263. 丑数

编写一个程序判断给定的数是否为丑数。
丑数就是只包含质因数 2, 3, 5 的正整数。

示例 1:
输入: 6
输出: true
解释: 6 = 2 × 3

示例 2:
输入: 8
输出: true
解释: 8 = 2 × 2 × 2

示例 3:
输入: 14
输出: false 

解释: 14 不是丑数，因为它包含了另外一个质因数 7。

说明：
1 是丑数。
输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。 */



// 根据2 3 5分别做去除因子处理
var isUgly = function (num) {
  var temp
  if (num < 1) return false
  if (num === 1) return true
  temp = num
  while (temp % 2 === 0) {
    temp /= 2
  }
  while (temp % 3 === 0) {
    temp /= 3
  }
  while (temp % 5 === 0) {
    temp /= 5
  }
  return temp === 1
}