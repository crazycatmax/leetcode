/* 29. 两数相除

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
返回被除数 dividend 除以除数 divisor 得到的商。

示例 1:
输入: dividend = 10, divisor = 3
输出: 3

示例 2:
输入: dividend = 7, divisor = -3
输出: -2

说明:
被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。 */



// 方法1	超出时间限制
var divide = function (dividend, divisor) {
  var count = 0,
    positive
  if (dividend === 0) return 0
  positive = (dividend ^ divisor) > 0
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (dividend >= divisor) { //每次减去一个除数，效率低
    dividend -= divisor
    count++
  }
  count = positive ? count : -count
  if (count > Math.pow(2, 31) - 1 || count < -Math.pow(2, 31))
    return Math.pow(2, 31) - 1
  return count
}

// // 方法2	左右移操作 >> <<
// var divide2 = function (dividend, divisor) {
//   var count = 0,
//       MAX = Math.pow(2, 31),
//       positive
//   if (dividend === 0) return 0
//   positive = (dividend ^ divisor) > 0
//   dividend = Math.abs(dividend)
//   divisor = Math.abs(divisor)
//   while (dividend >= divisor) { //每次减去一个除数，效率低
//     dividend -= divisor
//     count++
//   }
//   count = positive ? count : -count
//   if (count > MAX - 1 || count < -MAX)
//     return MAX - 1
//   return count
// }

// 方法3
var divide3 = function (dividend, divisor) {
}